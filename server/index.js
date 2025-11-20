import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { orchestrator } from './orchestrator.js';
import { config, ensureConfig } from './config.js';

ensureConfig();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));

app.use(express.static(publicDir));

app.post('/api/chat', async (req, res) => {
  const { sessionId, message } = req.body ?? {};

  try {
    const result = await orchestrator.handleMessage({
      sessionId,
      userMessage: message,
    });

    res.json(result);
  } catch (error) {
    console.error('[chat:error]', error);

    res.status(500).json({
      sessionId,
      reply:
        "Something glitched on my end while pulling in support notes. Let's give that another shot in a moment.",
      metadata: { usedModels: [] },
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    offlineOnly: Boolean(config.offlineOnly),
  });
});

app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    res.sendFile(path.join(publicDir, 'index.html'));
    return;
  }
  next();
});

app.listen(config.port, () => {
  console.log(`[server] Tech Chat Buddy running on http://localhost:${config.port}`);
});
