import React from 'react';
import ScreenShare from './components/ScreenShare';
import AISuggestions from './components/AISuggestions';

function App() {
  return (
    <div className="App">
      <h1>Vibe Code Application</h1>
      {/* Future UI/UX: Ensure responsiveness across various screen sizes */}
      <ScreenShare />
      <AISuggestions />
    </div>
  );
}

export default App;