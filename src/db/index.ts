import { neon } from '@neondatabase/serverless';

// if (!process.env.DATABASE_URL) {
//   throw new Error('DATABASE_URL is not defined');
// }

// export const sql = neon('postgresql://neondb_owner:npg_8wjqBG4XfmIp@ep-purple-cloud-b4e1k3wx-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require');


export const sql = neon(process.env.DATABASE_URL!);
