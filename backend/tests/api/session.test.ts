import request from 'supertest';
import express from 'express';

const app = express();
app.use(express.json());

// Mock the session route (will be implemented in T014)
app.post('/api/session/start', (req, res) => {
  res.status(200).json({ sessionId: 'mock-session-id' });
});

describe('POST /api/session/start', () => {
  it('should create a new session', async () => {
    const res = await request(app).post('/api/session/start');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('sessionId');
  });
});
