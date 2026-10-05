// import { Hono } from 'hono';

// export const healthRoute = new Hono();

// healthRoute.get('/', (c) => {
//   return c.json({
//     success: true,
//     message: 'SplitMate API is running 🚀',
//   });
// });

import { Hono } from 'hono';
import { sql } from '../db/index.js';

export const healthRoute = new Hono();

healthRoute.get('/', async (c) => {
  try {
    const result = await sql`
      SELECT NOW() AS time
    `;

    return c.json({
      success: true,
      message: 'SplitMate API is running 🚀',
      database: 'connected',
      time: result[0].time,
    });
  } catch (error) {
    console.error(error);

    return c.json(
      {
        success: false,
        message: 'Database connection failed',
      },
      500
    );
  }
});