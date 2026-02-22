import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

interface Chat {
  id: string;
  name: string;
  lastMessage?: string;
  unreadCount?: number;
}

interface UserPresence {
  userId: string;
  status: 'online' | 'offline';
}

const socket = io('http://localhost:3000', { path: '/ws/chat' }); // Assuming chat WebSocket path

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([
    { id: 'chat1', name: 'General Chat', lastMessage: 'Hello everyone!', unreadCount: 2 },
    { id: 'chat2', name: 'Project Alpha', lastMessage: 'Meeting at 3 PM', unreadCount: 0 },
  ]);
  const [userPresence, setUserPresence] = useState<UserPresence[]>([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to chat socket');
      // TODO: Emit 'set_presence' to indicate online status
      // TODO: Emit 'join_chat' for active chats
    });

    socket.on('new_message', (message: any) => {
      console.log('New message received:', message);
      // TODO: Update chat list with new message and unread count
    });

    socket.on('presence_update', (presence: UserPresence) => {
      console.log('Presence update:', presence);
      // TODO: Update user presence in the list
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // TODO: Integrate with REST API to fetch initial chat list (GET /api/chat/list or similar)

  return (
    <div className="chat-list-container">
      <h3>Chats</h3>
      <div className="chat-list">
        {chats.map((chat) => (
          <div key={chat.id} className="chat-item">
            <h4>{chat.name}</h4>
            {chat.lastMessage && <p>{chat.lastMessage}</p>}
            {chat.unreadCount && chat.unreadCount > 0 && (
              <span className="unread-count">{chat.unreadCount}</span>
            )}
            {/* TODO: Display user presence for chat participants */}
          </div>
        ))}
      </div>
      {/* TODO: Add functionality to create new chats */}
    </div>
  );
};

export default ChatList;
