import { Server as SocketIOServer } from 'socket.io';
import { Server as HttpServer } from 'http';

export function initAISuggestionsSocket(httpServer: HttpServer) {
  const io = new SocketIOServer(httpServer, {
    path: '/ai-suggestions',
    cors: {
      origin: "*", // Allow all origins for development
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log(`AI suggestions client connected: ${socket.id}`);

    socket.on('request-suggestion', (data: string) => {
      // In a real application, this data would be sent to an actual AI model
      // and the suggestion would be generated based on the input.
      console.log(`Received suggestion request from ${socket.id}: ${data.substring(0, 50)}...`);
      const suggestion = { id: 'ai-sugg-' + Date.now(), content: `AI suggestion for: ${data}` };
      socket.emit('ai-suggestion', suggestion);
    });

    socket.on('disconnect', () => {
      console.log(`AI suggestions client disconnected: ${socket.id}`);
    });
  });

  return io;
}
