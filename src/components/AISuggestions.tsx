import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

interface AISuggestion {
  id: string;
  content: string;
}

const socket = io('http://localhost:3000', { path: '/ai-suggestions' });

const AISuggestions: React.FC = () => {
  const [suggestions, setSuggestions] = useState<AISuggestion[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to AI suggestions socket');
    });

    socket.on('ai-suggestion', (suggestion: AISuggestion) => {
      console.log('Received AI suggestion:', suggestion);
      // TODO: Optimize rendering of large number of suggestions for performance.
      setSuggestions((prevSuggestions) => [...prevSuggestions, suggestion]);
    });

    // TODO: Integrate with backend API for sending user feedback on suggestions (POST /api/suggestion/{suggestionId}/feedback)
    // TODO: Refine UI to allow users to accept/reject/modify suggestions

    return () => {
      socket.disconnect();
    };
  }, []);

  const requestSuggestion = () => {
    if (input.trim()) {
      socket.emit('request-suggestion', input);
      setInput('');
    }
  };

  return (
    <div>
      <h2>AI Suggestions</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter code snippet or problem"
        />
        <button onClick={requestSuggestion}>Get Suggestion</button>
      </div>
      <div>
        {suggestions.map((s) => (
          <div key={s.id} style={{ border: '1px solid gray', margin: '5px', padding: '5px' }}>
            <p>{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISuggestions;
