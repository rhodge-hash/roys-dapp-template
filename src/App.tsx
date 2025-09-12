import React from 'react';
import AppRouter from './AppRouter'; // Import AppRouter

function App() {
  return (
    <div className="App">
      {/* Future UI/UX: Ensure responsiveness across various screen sizes */}
      {/* TODO: Optimize overall frontend performance and ensure cross-browser compatibility. */}
      <AppRouter /> {/* Render AppRouter */}
    </div>
  );
}

export default App;