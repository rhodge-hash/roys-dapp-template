import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
}

const socket = io('http://localhost:3000', { path: '/ws/chat' }); // Assuming chat WebSocket path

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 'msg1', sender: 'Alice', content: 'Hey Bob!', timestamp: '10:00 AM' },
    { id: 'msg2', sender: 'Bob', content: 'Hi Alice!', timestamp: '10:01 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to chat window socket');
      // TODO: Emit 'join_chat' for the currently active chat
    });

    socket.on('new_message', (message: Message) => {
      console.log('New message received in window:', message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const messageToSend: Message = {
        id: `msg-${Date.now()}`,
        sender: 'Me', // TODO: Replace with actual user name
        content: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      socket.emit('send_message', messageToSend); // Send message via WebSocket
      setNewMessage('');
      // Optimistically add message to UI
      setMessages((prevMessages) => [...prevMessages, messageToSend]);
    }
  };

  // TODO: Integrate with REST API to fetch message history for the active chat (GET /api/chat/{chatId}/messages)

  return (
    <div className="chat-window-container">
      <div className="messages-display">
        {messages.map((msg) => (
          <div key={msg.id} className="message-item">
            <strong>{msg.sender}:</strong> {msg.content} <span>({msg.timestamp})</span>
          </div>
        ))}
      </div>
      <div className="message-input-area">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
