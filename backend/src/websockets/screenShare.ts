import { Server as SocketIOServer } from 'socket.io';
import { Server as HttpServer } from 'http';

export function initScreenShareSocket(httpServer: HttpServer) {
  const io = new SocketIOServer(httpServer, {
    path: '/screen-share',
    cors: {
      origin: "*", // Allow all origins for development
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log(`Screen share client connected: ${socket.id}`);

    socket.on('screen-frame', (data: string) => {
      // In a real application, you would process this screen frame data,
      // potentially sending it to an AI model or broadcasting to other viewers.
      console.log(`Received screen frame from ${socket.id}: ${data.substring(0, 50)}...`);
      // For now, just acknowledge receipt
      socket.emit('screen-frame-ack', `Frame received from ${socket.id}`);
    });

    socket.on('disconnect', () => {
      console.log(`Screen share client disconnected: ${socket.id}`);
    });
  });

  return io;
}
