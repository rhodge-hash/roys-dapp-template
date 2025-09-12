# React DApp Starter

This project serves as a starter template for building decentralized applications (DApps) with React. It provides a foundational structure and integrates essential tools and practices for modern web development.

## Vibe Code: The AI Pair Programmer That Sees Everything

A significant new feature, "Vibe Code," has been integrated into this application. Vibe Code aims to be a next-generation collaborative coding environment where developers can work with a multimodal AI assistant that "sees" their screens to provide real-time, contextual assistance.

### Key Features Implemented:
- **Screen Sharing**: Real-time capture and transmission of developer's screen.
- **AI Suggestion Display**: Frontend component to display AI-generated coding suggestions.
- **AI Model Integration**: Basic service for simulating AI model interaction and suggestion generation.
- **Session Management**: API for starting and managing coding sessions.
- **User Feedback**: API for collecting feedback on AI suggestions.

## Real-time Chat System

A new feature, "Real-time Chat System," has been added to enable instant communication within the application. This system provides real-time messaging, message history, and user presence indicators.

### Key Features Implemented:
- **Backend Services**: WebSocket server for real-time communication, REST APIs for chat creation and message history.
- **Data Models**: Defined data models for User, Chat, ChatParticipant, and Message.
- **Database Integration**: Placeholder for PostgreSQL for message history and Redis for user presence.
- **Frontend UI**: Basic UI components for chat list and chat window.

## Dark Mode Implementation

The application now supports a dark mode theme, providing a more comfortable viewing experience in low-light environments. This feature leverages `next-themes` for seamless theme switching and Tailwind CSS for styling. A toggle has been integrated into the header to allow users to switch between light, dark, and system themes.

## Project Setup and Running

To get this project up and running on your local machine, follow these steps:

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn
*   Docker (for PostgreSQL and Redis for chat system)

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

3.  **Install Backend Dependencies (Vibe Code):**
    ```bash
    cd backend
    npm install
    # or yarn install
    cd ..
    ```

4.  **Install Backend Dependencies (Chat System):**
    ```bash
    cd backend-chat
    npm install
    # or yarn install
    cd ..
    ```

    *Note: Ensure all UI component dependencies, such as `@radix-ui/react-dropdown-menu`, are correctly installed.* 

### Running the Application

1.  **Start Docker Compose services (for chat system):**
    ```bash
    docker-compose up -d postgres redis
    ```

2.  **Start the Vibe Code Backend Server:**
    ```bash
    cd backend
    npm start # or a similar command defined in backend/package.json
    cd ..
    ```

3.  **Start the Chat System Backend Server:**
    ```bash
    cd backend-chat
    npm start # or a similar command defined in backend-chat/package.json
    cd ..
    ```

4.  **Start the Frontend Development Server:**
    ```bash
    cd src
    npm run dev # or yarn dev
    cd ..
    ```

5.  Open your browser and navigate to `http://localhost:3000` (or the port specified by Vite).

## Key Technologies

*   **Frontend**: React, TypeScript, Vite, WebRTC (for screen sharing), UI libraries (e.g., Material-UI), `next-themes` (for theme management), Socket.IO Client, **Refined UI Components (Buttons, Checkboxes, Dialogs, Inputs, Navigation, Sheets, Toasts)**
*   **Backend (Vibe Code)**: Node.js, Express.js, TypeScript, WebSockets (Socket.IO)
*   **Backend (Chat System)**: Node.js, Express.js, TypeScript, WebSockets (Socket.IO), PostgreSQL, Redis
*   **AI Integration**: Placeholder for multimodal AI model integration
*   **State Management**: Zustand
*   **Styling**: Tailwind CSS, PostCSS, **Refined Color Palette and Typography**
*   **Routing**: React Router
*   **Testing**: (Placeholder for E2E tests)

## UI Component Refinement

As part of the Frontend Redesign Overhaul - Phase 2, the existing UI components (`button.tsx`, `checkbox.tsx`, `dialog.tsx`, `dropdown-menu.tsx`, `input.tsx`, `navigation-menu.tsx`, `sheet.tsx`, `sonner.tsx`) have been refined to align with the new design system. This involved:
- Adjusting colors, shadows, and focus states to match the refined color palette and aesthetic.
- Ensuring consistency in border radius and typography.
- Confirming responsiveness across various screen sizes.

## Project Structure

```
.
├───backend/             # Node.js/Express backend for AI processing and APIs (Vibe Code)
│   ├───src/             
│   ├───tests/           
│   ├───package.json
│   └───tsconfig.json
├───backend-chat/        # Node.js/Express backend for the chat system
│   ├───src/             
│   ├───tests/           
│   ├───package.json
│   └───tsconfig.json
├───docker-compose.yml   # Docker Compose for PostgreSQL and Redis
├───e2e/                 # End-to-end tests for the application
├───public/              # Static assets
├───src/                 # React Frontend application
│   ├───AppRouter.tsx
│   ├───components/      
│   │   ├───Header/
│   │   ├───ui/
│   │   ├───ScreenShare.tsx 
│   │   └───AISuggestions.tsx 
│   │   ├───ChatList.tsx 
│   │   └───ChatWindow.tsx 
│   ├───config/
│   ├───hooks/
│   ├───lib/
│   ├───pages/
│   ├───services/        
│   ├───store/
│   └───types/
├───specs/               # Spec-Driven Development artifacts
│   └───002-vibe-code-the/ 
│   └───003-real-time-chat/ 
├───.gitignore
├───package.json         
├───postcss.config.js
├───README.md            
├───tsconfig.json
├───vite.config.ts
└───yarn.lock
```

## Spec-Driven Development

This project utilizes a Spec-Driven Development workflow. Both the "Vibe Code" and "Real-time Chat System" features were developed using this approach, emphasizing clear, detailed specifications and plans before implementation, ensuring alignment and a structured development process. The `specs/` directory contains all the artifacts generated during this process for each feature.
