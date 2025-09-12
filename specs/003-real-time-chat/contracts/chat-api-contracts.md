# API Contracts for Real-time Chat System

## REST Endpoints

### `POST /api/chat/create`
- **Description**: Creates a new chat (1:1 or group).
- **Request**: `{ "type": "string", "name"?: "string", "participants": ["string"] }`
- **Response**: `{ "chatId": "string", "message": "Chat created successfully" }`

### `GET /api/chat/{chatId}/messages`
- **Description**: Retrieves message history for a specific chat.
- **Request**: (Query params: `limit`?, `offset`?)
- **Response**: `{ "messages": [ { "id": "string", "senderId": "string", "content": "string", "timestamp": "datetime" } ] }`

## WebSocket Endpoints

### `ws://localhost:PORT/ws/chat`
- **Description**: Real-time communication for sending/receiving messages and presence updates.

#### Client to Server Messages:
- **`send_message`**:
  - **Payload**: `{ "chatId": "string", "content": "string" }`
- **`join_chat`**:
  - **Payload**: `{ "chatId": "string" }`
- **`leave_chat`**:
  - **Payload**: `{ "chatId": "string" }`
- **`set_presence`**:
  - **Payload**: `{ "status": "online" | "offline" }`

#### Server to Client Messages:
- **`new_message`**:
  - **Payload**: `{ "id": "string", "chatId": "string", "senderId": "string", "content": "string", "timestamp": "datetime" }`
- **`user_joined`**:
  - **Payload**: `{ "chatId": "string", "userId": "string" }`
- **`user_left`**:
  - **Payload**: `{ "chatId": "string", "userId": "string" }`
- **`presence_update`**:
  - **Payload**: `{ "userId": "string", "status": "online" | "offline" }`
