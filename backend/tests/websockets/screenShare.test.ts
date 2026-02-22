import { Server } from 'socket.io';
import { io as Client } from 'socket.io-client';
import { createServer } from 'http';

describe('Screen Share WebSocket', () => {
  let io: Server;
  let client: any;
  let httpServer: any;

  beforeAll(done => {
    httpServer = createServer();
    io = new Server(httpServer);

    io.on('connection', socket => {
      socket.on('screen-share', (data: any) => {
        socket.emit('screen-share-ack', data); // Acknowledge receipt
      });
    });

    httpServer.listen(3000, () => {
      client = Client('http://localhost:3000');
      client.on('connect', done);
    });
  });

  afterAll(() => {
    io.close();
    client.close();
    httpServer.close();
  });

  it('should receive screen frame data', done => {
    const testData = 'mock screen frame data';
    client.emit('screen-share', testData);
    client.on('screen-share-ack', (data: string) => {
      expect(data).toEqual(testData);
      done();
    });
  });
});