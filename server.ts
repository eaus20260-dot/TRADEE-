import express from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// API Route for Contact / Booking Form Submission (Fallback redirect to Jotform)
app.post('/api/contact', async (_req, res) => {
  res.redirect(303, 'https://form.jotform.com/262643423217049');
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    formTarget: 'https://form.jotform.com/262643423217049',
  });
});

async function startServer() {
  const distPath = path.join(process.cwd(), 'dist');
  const hasDist = fs.existsSync(path.join(distPath, 'index.html'));

  // Always serve static compiled Vite bundle if dist exists or in production mode
  if (process.env.NODE_ENV === 'production' || hasDist) {
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Trade E Solutions server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
