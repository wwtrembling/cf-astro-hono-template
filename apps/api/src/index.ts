import { Hono } from 'hono';
import { cors } from 'hono/cors';

export interface Env {
  DB: D1Database;
  ADMIN_SECRET?: string;
  SLACK_WEBHOOK_URL?: string;
}

const app = new Hono<{ Bindings: Env }>();

app.use('/api/*', cors({
  origin: [
    'https://{{project-name}}.pages.dev',
    'http://localhost:4321',
  ],
  allowMethods: ['GET', 'POST'],
}));

app.get('/api/health', (c) => c.json({ ok: true }));

// 라우트를 여기에 추가하세요
// import myRoute from './routes/my-route';
// app.route('/api/my-route', myRoute);

export default {
  fetch: app.fetch,
  // cron 사용 시 아래 주석 해제
  // scheduled: async (_event: ScheduledEvent, env: Env) => {
  //   await myScheduledJob(env.DB, env.SLACK_WEBHOOK_URL);
  // },
};
