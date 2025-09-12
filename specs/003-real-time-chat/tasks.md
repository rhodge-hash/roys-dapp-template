# Tasks for Feature: Real-time Chat System

**Feature Branch**: `003-real-time-chat`

## Setup Tasks

- **T001**: Initialize Backend Node.js/Express Project.
  - **Description**: Set up a new Node.js project with Express.js and TypeScript for the chat backend.
  - **File Path**: `backend-chat/` (new directory)
  - **Dependencies**: None
  - **Command**: `run_shell_command(command='mkdir backend-chat && cd backend-chat && npm init -y && npm install express typescript @types/express @types/node && npx tsc --init', directory='.')`

- **T002**: Install Backend Dependencies.
  - **Description**: Install necessary backend libraries (WebSocket server, PostgreSQL client, Redis client).
  - **File Path**: `backend-chat/package.json`
  - **Dependencies**: T001
  - **Command**: `run_shell_command(command='cd backend-chat && npm install socket.io pg redis @types/socket.io @types/pg @types/redis', directory='.')`

- **T003**: Initialize Frontend React Project (if not already done).
  - **Description**: Ensure the frontend React project is set up. (Assuming it's already set up from previous features, this will be a check).
  - **File Path**: `src/`
  - **Dependencies**: None
  - **Command**: `echo "Frontend React project assumed to be initialized."`

- **T004**: Install Frontend Dependencies.
  - **Description**: Install necessary frontend libraries (WebSocket client).
  - **File Path**: `src/package.json`
  - **Dependencies**: T003
  - **Command**: `run_shell_command(command='cd src && npm install socket.io-client', directory='.')`

- **T005**: Setup Docker Compose for PostgreSQL and Redis.
  - **Description**: Create a `docker-compose.yml` file to easily spin up PostgreSQL and Redis instances.
  - **File Path**: `docker-compose.yml`
  - **Dependencies**: None
  - **Command**: `write_file(file_path='docker-compose.yml', content='''
version: '3.8'
services:
  postgres:
    image: postgres:13
    environment:
      POSTGRES_DB: chat_db
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:6
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
''')`

## Database & Model Tasks [P]

- **T006 [P]**: Implement `User` Data Model and CRUD operations.
  - **Description**: Define the `User` schema and basic database operations.
  - **File Path**: `backend-chat/src/models/User.ts`, `backend-chat/src/db/userRepository.ts`
  - **Dependencies**: T001, T002
  - **Command**: `mkdir -p backend-chat/src/models backend-chat/src/db && write_file(file_path='backend-chat/src/models/User.ts', content='// User model definition') && write_file(file_path='backend-chat/src/db/userRepository.ts', content='// User CRUD operations')`

- **T007 [P]**: Implement `Chat` Data Model and CRUD operations.
  - **Description**: Define the `Chat` schema and basic database operations.
  - **File Path**: `backend-chat/src/models/Chat.ts`, `backend-chat/src/db/chatRepository.ts`
  - **Dependencies**: T001, T002
  - **Command**: `mkdir -p backend-chat/src/models backend-chat/src/db && write_file(file_path='backend-chat/src/models/Chat.ts', content='// Chat model definition') && write_file(file_path='backend-chat/src/db/chatRepository.ts', content='// Chat CRUD operations')`

- **T008 [P]**: Implement `ChatParticipant` Data Model and CRUD operations.
  - **Description**: Define the `ChatParticipant` schema and basic database operations.
  - **File Path**: `backend-chat/src/models/ChatParticipant.ts`, `backend-chat/src/db/chatParticipantRepository.ts`
  - **Dependencies**: T001, T002
  - **Command**: `mkdir -p backend-chat/src/models backend-chat/src/db && write_file(file_path='backend-chat/src/models/ChatParticipant.ts', content='// ChatParticipant model definition') && write_file(file_path='backend-chat/src/db/chatParticipantRepository.ts', content='// ChatParticipant CRUD operations')`

- **T009 [P]**: Implement `Message` Data Model and CRUD operations.
  - **Description**: Define the `Message` schema and basic database operations.
  - **File Path**: `backend-chat/src/models/Message.ts`, `backend-chat/src/db/messageRepository.ts`
  - **Dependencies**: T001, T002
  - **Command**: `mkdir -p backend-chat/src/models backend-chat/src/db && write_file(file_path='backend-chat/src/models/Message.ts', content='// Message model definition') && write_file(file_path='backend-chat/src/db/messageRepository.ts', content='// Message CRUD operations')`

- **T010**: Create Database Migrations for all models.
  - **Description**: Set up a migration tool (e.g., TypeORM migrations, Knex.js) and create initial migration files for User, Chat, ChatParticipant, and Message tables.
  - **File Path**: `backend-chat/src/migrations/`
  - **Dependencies**: T006, T007, T008, T009
  - **Command**: `mkdir -p backend-chat/src/migrations && write_file(file_path='backend-chat/src/migrations/initial.ts', content='// Initial database migration')`

## Test Tasks (TDD - Write Tests First) [P]

- **T011 [P]**: Write Contract Test for `POST /api/chat/create`.
  - **Description**: Create a test for the chat creation API endpoint.
  - **File Path**: `backend-chat/tests/api/chat.test.ts`
  - **Dependencies**: T001, T002
  - **Command**: `mkdir -p backend-chat/tests/api && write_file(file_path='backend-chat/tests/api/chat.test.ts', content='// Test for POST /api/chat/create')`

- **T012 [P]**: Write Contract Test for `GET /api/chat/{chatId}/messages`.
  - **Description**: Create a test for retrieving chat message history.
  - **File Path**: `backend-chat/tests/api/messages.test.ts`
  - **Dependencies**: T001, T002
  - **Command**: `mkdir -p backend-chat/tests/api && write_file(file_path='backend-chat/tests/api/messages.test.ts', content='// Test for GET /api/chat/{chatId}/messages')`

- **T013 [P]**: Write Contract Test for `ws://.../ws/chat` WebSocket (send_message).
  - **Description**: Create a test for sending messages via WebSocket.
  - **File Path**: `backend-chat/tests/websockets/chat.test.ts`
  - **Dependencies**: T001, T002
  - **Command**: `mkdir -p backend-chat/tests/websockets && write_file(file_path='backend-chat/tests/websockets/chat.test.ts', content='// Test for send_message WebSocket')`

- **T014 [P]**: Write Contract Test for `ws://.../ws/chat` WebSocket (presence_update).
  - **Description**: Create a test for user presence updates via WebSocket.
  - **File Path**: `backend-chat/tests/websockets/presence.test.ts`
  - **Dependencies**: T001, T002
  - **Command**: `mkdir -p backend-chat/tests/websockets && write_file(file_path='backend-chat/tests/websockets/presence.test.ts', content='// Test for presence_update WebSocket')`

- **T015 [P]**: Write Integration Test for Primary User Story (real-time messaging).
  - **Description**: Test the end-to-end flow of sending and receiving messages in real-time.
  - **File Path**: `e2e/chatRealtime.test.ts`
  - **Dependencies**: T003, T001
  - **Command**: `mkdir -p e2e && write_file(file_path='e2e/chatRealtime.test.ts', content='// E2E test for real-time messaging')`

- **T016 [P]**: Write Integration Test for Message History.
  - **Description**: Test the end-to-end flow of viewing message history.
  - **File Path**: `e2e/chatHistory.test.ts`
  - **Dependencies**: T003, T001
  - **Command**: `mkdir -p e2e && write_file(file_path='e2e/chatHistory.test.ts', content='// E2E test for message history')`

- **T017 [P]**: Write Integration Test for User Presence.
  - **Description**: Test the end-to-end flow of displaying user online/offline status.
  - **File Path**: `e2e/chatPresence.test.ts`
  - **Dependencies**: T003, T001
  - **Command**: `mkdir -p e2e && write_file(file_path='e2e/chatPresence.test.ts', content='// E2E test for user presence')`

## Core Implementation Tasks

- **T018**: Configure PostgreSQL and Redis connections.
  - **Description**: Set up database and Redis client connections in the backend.
  - **File Path**: `backend-chat/src/config/database.ts`, `backend-chat/src/config/redis.ts`
  - **Dependencies**: T002, T005
  - **Command**: `mkdir -p backend-chat/src/config && write_file(file_path='backend-chat/src/config/database.ts', content='// PostgreSQL connection config') && write_file(file_path='backend-chat/src/config/redis.ts', content='// Redis connection config')`

- **T019**: Implement `POST /api/chat/create` endpoint.
  - **Description**: Create the backend endpoint to create new chats.
  - **File Path**: `backend-chat/src/routes/chatRoutes.ts`
  - **Dependencies**: T007, T011, T018
  - **Command**: `mkdir -p backend-chat/src/routes && write_file(file_path='backend-chat/src/routes/chatRoutes.ts', content='// Chat creation API')`

- **T020**: Implement `GET /api/chat/{chatId}/messages` endpoint.
  - **Description**: Create the backend endpoint to retrieve chat message history.
  - **File Path**: `backend-chat/src/routes/messageRoutes.ts`
  - **Dependencies**: T009, T012, T018
  - **Command**: `mkdir -p backend-chat/src/routes && write_file(file_path='backend-chat/src/routes/messageRoutes.ts', content='// Message history API')`

- **T021**: Implement WebSocket server (`/ws/chat`).
  - **Description**: Set up the WebSocket server to handle real-time chat communication.
  - **File Path**: `backend-chat/src/websockets/chatSocket.ts`
  - **Dependencies**: T002, T018
  - **Command**: `mkdir -p backend-chat/src/websockets && write_file(file_path='backend-chat/src/websockets/chatSocket.ts', content='// WebSocket server implementation')`

- **T022**: Implement `send_message` handling (store and broadcast).
  - **Description**: Handle incoming messages, store them in PostgreSQL, and broadcast to relevant clients.
  - **File Path**: `backend-chat/src/websockets/chatHandlers.ts`
  - **Dependencies**: T009, T013, T021
  - **Command**: `mkdir -p backend-chat/src/websockets && write_file(file_path='backend-chat/src/websockets/chatHandlers.ts', content='// send_message handler')`

- **T023**: Implement `join_chat` and `leave_chat` handling.
  - **Description**: Handle users joining and leaving chat rooms.
  - **File Path**: `backend-chat/src/websockets/chatHandlers.ts`
  - **Dependencies**: T008, T021
  - **Command**: `write_file(file_path='backend-chat/src/websockets/chatHandlers.ts', content='// join_chat and leave_chat handlers', expected_replacements=1)`

- **T024**: Implement user presence management with Redis (`set_presence`).
  - **Description**: Store and update user online/offline status in Redis.
  - **File Path**: `backend-chat/src/services/presenceService.ts`
  - **Dependencies**: T002, T014, T018
  - **Command**: `mkdir -p backend-chat/src/services && write_file(file_path='backend-chat/src/services/presenceService.ts', content='// User presence service with Redis')`

- **T025**: Implement broadcasting `presence_update`.
  - **Description**: Broadcast user presence changes to relevant clients via WebSocket.
  - **File Path**: `backend-chat/src/websockets/presenceHandlers.ts`
  - **Dependencies**: T014, T021, T024
  - **Command**: `mkdir -p backend-chat/src/websockets && write_file(file_path='backend-chat/src/websockets/presenceHandlers.ts', content='// presence_update broadcast handler')`

- **T026**: Implement Frontend Chat List UI.
  - **Description**: Develop the UI to display a list of available chats.
  - **File Path**: `src/components/ChatList.tsx`
  - **Dependencies**: T004
  - **Command**: `mkdir -p src/components && write_file(file_path='src/components/ChatList.tsx', content='// Chat list UI component')`

- **T027**: Implement Frontend Chat Window UI (message display, input).
  - **Description**: Develop the UI for displaying messages and allowing users to input new messages.
  - **File Path**: `src/components/ChatWindow.tsx`
  - **Dependencies**: T004
  - **Command**: `write_file(file_path='src/components/ChatWindow.tsx', content='// Chat window UI component')`

- **T028**: Implement real-time message sending and receiving in UI.
  - **Description**: Connect frontend to WebSocket to send and receive messages.
  - **File Path**: `src/services/chatService.ts`
  - **Dependencies**: T004, T022, T027
  - **Command**: `mkdir -p src/services && write_file(file_path='src/services/chatService.ts', content='// Real-time chat service for frontend')`

- **T029**: Implement message history display in UI.
  - **Description**: Fetch and display past messages in the chat window.
  - **File Path**: `src/services/chatService.ts`
  - **Dependencies**: T020, T027
  - **Command**: `write_file(file_path='src/services/chatService.ts', content='// Message history display logic', expected_replacements=1)`

- **T030**: Implement user presence display in UI.
  - **Description**: Display online/offline status of users in the chat list and window.
  - **File Path**: `src/components/ChatList.tsx`, `src/components/ChatWindow.tsx`
  - **Dependencies**: T025, T026, T027
  - **Command**: `write_file(file_path='src/components/ChatList.tsx', content='// User presence in chat list', expected_replacements=1) && write_file(file_path='src/components/ChatWindow.tsx', content='// User presence in chat window', expected_replacements=1)`

## Integration and Polish Tasks

- **T031**: Integrate Frontend with Backend REST APIs and WebSockets.
  - **Description**: Connect the frontend components to the backend chat creation, message history, and real-time WebSocket services.
  - **File Path**: `src/App.tsx`
  - **Dependencies**: T019, T020, T028
  - **Command**: `write_file(file_path='src/App.tsx', content='// Frontend-backend chat integration', expected_replacements=1)`

- **T032**: Implement User Authentication and Authorization.
  - **Description**: Secure access to the chat system.
  - **File Path**: `backend-chat/src/middleware/auth.ts`, `src/services/auth.ts`
  - **Dependencies**: T006
  - **Command**: `mkdir -p backend-chat/src/middleware && write_file(file_path='backend-chat/src/middleware/auth.ts', content='// Backend auth middleware') && write_file(file_path='src/services/auth.ts', content='// Frontend auth service', expected_replacements=1)`

- **T033**: Implement Robust Error Handling and Logging.
  - **Description**: Add comprehensive error handling and logging across the frontend and backend.
  - **File Path**: `backend-chat/src/utils/errorHandler.ts`, `src/utils/logger.ts`
  - **Dependencies**: All core implementation tasks
  - **Command**: `mkdir -p backend-chat/src/utils && write_file(file_path='backend-chat/src/utils/errorHandler.ts', content='// Backend error handler') && mkdir -p src/utils && write_file(file_path='src/utils/logger.ts', content='// Frontend logger', expected_replacements=1)`

- **T034**: Write Unit Tests for Core Components [P].
  - **Description**: Create unit tests for individual functions and components in both frontend and backend.
  - **File Path**: `src/**/*.test.ts`, `backend-chat/**/*.test.ts`
  - **Dependencies**: All core implementation tasks
  - **Command**: `run_shell_command(command='echo "Run unit tests for chat system"', description='Placeholder for running unit tests')`

- **T035**: Performance Testing and Optimization.
  - **Description**: Optimize WebSocket performance, database queries, and Redis usage for scalability.
  - **File Path**: `backend-chat/src/websockets/chatSocket.ts`, `backend-chat/src/db/`
  - **Dependencies**: All core implementation tasks
  - **Command**: `run_shell_command(command='echo "Perform performance testing and optimization"', description='Placeholder for performance optimization')`

- **T036**: Update Documentation (README, Quickstart).
  - **Description**: Update the project README and quickstart guide with new feature details.
  - **File Path**: `README.md`, `specs/003-real-time-chat/quickstart.md`
  - **Dependencies**: All core implementation tasks
  - **Command**: `write_file(file_path='README.md', content='// Updated README for chat feature', expected_replacements=1) && write_file(file_path='specs/003-real-time-chat/quickstart.md', content='// Updated quickstart for chat feature', expected_replacements=1)`

## Parallel Execution Examples:

**Phase 1: Backend Setup and Data Models**
```
run_shell_command(command='mkdir backend-chat && cd backend-chat && npm init -y && npm install express typescript @types/express @types/node && npx tsc --init', directory='.') # T001
write_file(file_path='docker-compose.yml', content='''
version: '3.8'
services:
  postgres:
    image: postgres:13
    environment:
      POSTGRES_DB: chat_db
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:6
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
''') # T005
mkdir -p backend-chat/src/models backend-chat/src/db && write_file(file_path='backend-chat/src/models/User.ts', content='// User model definition') && write_file(file_path='backend-chat/src/db/userRepository.ts', content='// User CRUD operations') # T006
mkdir -p backend-chat/src/models backend-chat/src/db && write_file(file_path='backend-chat/src/models/Chat.ts', content='// Chat model definition') && write_file(file_path='backend-chat/src/db/chatRepository.ts', content='// Chat CRUD operations') # T007
mkdir -p backend-chat/src/models backend-chat/src/db && write_file(file_path='backend-chat/src/models/ChatParticipant.ts', content='// ChatParticipant model definition') && write_file(file_path='backend-chat/src/db/chatParticipantRepository.ts', content='// ChatParticipant CRUD operations') # T008
mkdir -p backend-chat/src/models backend-chat/src/db && write_file(file_path='backend-chat/src/models/Message.ts', content='// Message model definition') && write_file(file_path='backend-chat/src/db/messageRepository.ts', content='// Message CRUD operations') # T009
```

**Phase 2: Install Dependencies and Write Initial Tests**
```
run_shell_command(command='cd backend-chat && npm install socket.io pg redis @types/socket.io @types/pg @types/redis', directory='.') # T002
echo "Frontend React project assumed to be initialized." # T003
run_shell_command(command='cd src && npm install socket.io-client', directory='.') # T004
mkdir -p backend-chat/tests/api && write_file(file_path='backend-chat/tests/api/chat.test.ts', content='// Test for POST /api/chat/create') # T011
mkdir -p backend-chat/tests/api && write_file(file_path='backend-chat/tests/api/messages.test.ts', content='// Test for GET /api/chat/{chatId}/messages') # T012
mkdir -p backend-chat/tests/websockets && write_file(file_path='backend-chat/tests/websockets/chat.test.ts', content='// Test for send_message WebSocket') # T013
mkdir -p backend-chat/tests/websockets && write_file(file_path='backend-chat/tests/websockets/presence.test.ts', content='// Test for presence_update WebSocket') # T014
mkdir -p e2e && write_file(file_path='e2e/chatRealtime.test.ts', content='// E2E test for real-time messaging') # T015
mkdir -p e2e && write_file(file_path='e2e/chatHistory.test.ts', content='// E2E test for message history') # T016
mkdir -p e2e && write_file(file_path='e2e/chatPresence.test.ts', content='// E2E test for user presence') # T017
```