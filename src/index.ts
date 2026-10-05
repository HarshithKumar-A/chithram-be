import { Hono } from 'hono';
import { healthRoute } from './routes/health.js';

const app = new Hono();

app.route('/api/health', healthRoute);

export default app;