import React from 'react';
import ScreenShare from '../../components/ScreenShare'; // Adjust path as needed
import AISuggestions from '../../components/AISuggestions'; // Adjust path as needed

const VibeCodeSession: React.FC = () => {
  return (
    <div className="vibe-code-session-container">
      <h2>Vibe Code Session</h2>
      <div className="session-content">
        <div className="screen-share-area">
          <ScreenShare />
        </div>
        <div className="ai-suggestions-panel">
          <AISuggestions />
        </div>
      </div>
    </div>
  );
};

export default VibeCodeSession;
