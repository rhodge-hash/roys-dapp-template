import app from './app';
import { createServer } from 'http';
import { initScreenShareSocket } from './websockets/screenShare';
import { initAISuggestionsSocket } from './websockets/aiSuggestions'; // Import initAISuggestionsSocket

const PORT = process.env.PORT || 3000;

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  initScreenShareSocket(httpServer);
  initAISuggestionsSocket(httpServer); // Initialize AI suggestions socket
});
