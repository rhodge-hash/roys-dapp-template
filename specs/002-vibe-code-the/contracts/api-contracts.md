# API Contracts for Vibe Code

## Session Management

### `POST /api/session/start`
- **Request**: `{}`
- **Response**: `{ "sessionId": "string" }`

## Screen Sharing (WebSocket)

### `ws://localhost:PORT/api/session/{sessionId}/screen-share`
- **Client to Server**: Binary data (image frames)
- **Server to Client**: `{ "status": "ack" }`

## AI Suggestions (WebSocket)

### `ws://localhost:PORT/api/session/{sessionId}/ai-suggestions`
- **Server to Client**: `{ "suggestionId": "string", "type": "string", "content": "string", "context": {} }`
- **Client to Server**: `{ "suggestionId": "string", "feedbackType": "string", "comment": "string" }`
