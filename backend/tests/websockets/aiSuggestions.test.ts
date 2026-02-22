import { Server } from 'socket.io';
import { io as Client } from 'socket.io-client';
import { createServer } from 'http';

describe('AI Suggestions WebSocket', () => {
  let io: Server;
  let client: any;
  let httpServer: any;

  beforeAll(done => {
    httpServer = createServer();
    io = new Server(httpServer);

    io.on('connection', socket => {
      socket.on('request-suggestion', (data: any) => {
        socket.emit('ai-suggestion', { id: '1', content: `AI suggestion for: ${data}` });
      });
    });

    httpServer.listen(3001, () => {
      client = Client('http://localhost:3001');
      client.on('connect', done);
    });
  });

  afterAll(() => {
    io.close();
    client.close();
    httpServer.close();
  });

  it('should receive AI suggestions', done => {
    const testData = 'code snippet';
    client.emit('request-suggestion', testData);
    client.on('ai-suggestion', (suggestion: any) => {
      expect(suggestion).toHaveProperty('id');
      expect(suggestion).toHaveProperty('content');
      expect(suggestion.content).toContain(testData);
      done();
    });
  });
});
