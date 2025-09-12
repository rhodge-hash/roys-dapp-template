# React DApp Starter

This project serves as a starter template for building decentralized applications (DApps) with React. It provides a foundational structure and integrates essential tools and practices for modern web development.

## Vibe Code: The AI Pair Programmer That Sees Everything

A significant new feature, "Vibe Code," has been integrated into this application. Vibe Code aims to be a next-generation collaborative coding environment where developers can work with a multimodal AI assistant that "sees" their screens to provide real-time, contextual assistance.

## Project Setup and Running

To get this project up and running on your local machine, follow these steps:

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd react-dapp-starter
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    cd src
    npm install
    # or yarn install
    cd ..
    ```

3.  **Install Backend Dependencies:**
    ```bash
    cd backend
    npm install
    # or yarn install
    cd ..
    ```

### Running the Application

1.  **Start the Backend Server:**
    ```bash
    cd backend
    npm start # or a similar command defined in backend/package.json
    cd ..
    ```

2.  **Start the Frontend Development Server:**
    ```bash
    cd src
    npm run dev # or yarn dev
    cd ..
    ```

3.  Open your browser and navigate to `http://localhost:3000` (or the port specified by Vite).

## Key Technologies

*   **Frontend**: React, TypeScript, Vite, WebRTC (for screen sharing), UI libraries (e.g., Material-UI), **`next-themes` (for theme management)**
*   **Backend**: Node.js, Express.js, TypeScript, WebSockets (Socket.IO)
*   **AI Integration**: Placeholder for multimodal AI model integration
*   **State Management**: Zustand
*   **Styling**: Tailwind CSS, PostCSS
*   **Routing**: React Router
*   **Testing**: (Placeholder for E2E tests)

## Dark Mode Implementation

The application now supports a dark mode theme, providing a more comfortable viewing experience in low-light environments. This feature leverages `next-themes` for seamless theme switching and Tailwind CSS for styling. A toggle has been integrated into the header to allow users to switch between light, dark, and system themes.

## Project Structure

```
.
├───backend/             # New: Node.js/Express backend for AI processing and APIs
│   ├───src/             # Backend source code
│   │   ├───middleware/  # Authentication and authorization middleware
│   │   ├───models/      # Data model definitions (DeveloperSession, ScreenFrame, etc.)
│   │   ├───routes/      # API endpoints (session management, feedback)
│   │   ├───services/    # AI integration service
│   │   └───websockets/  # WebSocket servers (screen sharing, AI suggestions)
│   ├───tests/           # Backend tests (unit, API, WebSocket)
│   ├───package.json
│   └───tsconfig.json
├───e2e/                 # New: End-to-end tests for the application
├───public/              # Static assets
├───src/                 # React Frontend application
│   ├───AppRouter.tsx
│   ├───components/      # React components (Header, UI, ScreenShare, AISuggestions)
│   │   ├───Header/
│   │   └───ui/
│   │   ├───ScreenShare.tsx # New: Frontend screen capture and transmission
│   │   └───AISuggestions.tsx # New: Frontend AI suggestion display
│   ├───config/
│   ├───hooks/
│   ├───lib/
│   ├───pages/
│   ├───services/        # New: Frontend services (e.g., authentication)
│   ├───store/
│   └───types/
├───specs/               # Spec-Driven Development artifacts
│   └───002-vibe-code-the/ # Feature-specific documentation
│       ├───spec.md      # Feature specification
│       ├───plan.md      # Implementation plan
│       ├───tasks.md     # Detailed executable tasks
│       ├───research.md  # Research findings
│       ├───data-model.md # Data model details
│       ├───quickstart.md # Feature-specific quickstart
│       └───contracts/   # API contract definitions
├───.gitignore
├───package.json         # Root package.json for overall project
├───postcss.config.js
├───README.md            # This file
├───tsconfig.json
├───vite.config.ts
└───yarn.lock
```

## Spec-Driven Development

This "Vibe Code" feature was developed using a Spec-Driven Development workflow. This approach emphasizes clear, detailed specifications and plans before implementation, ensuring alignment and a structured development process. The `specs/002-vibe-code-the/` directory contains all the artifacts generated during this process.

## Real-time Chat System

A new feature, "Real-time Chat System," has been added to enable instant communication within the application. This system provides real-time messaging, message history, and user presence indicators.

### Key Technologies for Chat System

*   **Real-time Communication**: WebSockets (Socket.IO)
*   **Database (Message History)**: PostgreSQL
*   **Caching/Presence**: Redis
*   **Backend**: Node.js/Express (or Python/FastAPI)
*   **Frontend**: React

### Project Structure Updates

```
.
├───backend-chat/        # New: Node.js/Express backend for the chat system
│   ├───src/             # Chat backend source code
│   │   ├───config/      # Database and Redis connection configurations
│   │   ├───db/          # Database repositories for User, Chat, Message, ChatParticipant
│   │   ├───middleware/  # Authentication middleware for chat
│   │   ├───models/      # Data model definitions for chat entities
│   │   ├───routes/      # REST API endpoints for chat (create chat, message history)
│   │   ├───services/    # User presence service
│   │   └───websockets/  # WebSocket handlers for chat and presence
│   ├───tests/           # Backend tests for chat system
│   ├───package.json
│   └───tsconfig.json
├───docker-compose.yml   # New: Docker Compose for PostgreSQL and Redis
```