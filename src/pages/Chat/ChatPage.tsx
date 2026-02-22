import React from 'react';
import ChatList from '../../components/ChatList'; // Adjust path as needed
import ChatWindow from '../../components/ChatWindow'; // Adjust path as needed

const ChatPage: React.FC = () => {
  return (
    <div className="chat-page-container">
      <h2>Real-time Chat</h2>
      <div className="chat-content">
        <div className="chat-list-area">
          <ChatList />
        </div>
        <div className="chat-window-area">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
