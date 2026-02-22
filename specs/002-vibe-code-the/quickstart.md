# Quickstart Guide for Vibe Code Feature

This guide provides instructions to set up and run the Vibe Code feature locally.

## Prerequisites

*   Node.js (v18+)
*   npm or yarn

## Setup

1.  **Ensure main project dependencies are installed:**
    If you haven't already, navigate to the project root (`react-dapp-starter/`) and install dependencies:
    ```bash
    npm install
    # or yarn install
    ```

2.  **Install Backend Dependencies for Vibe Code:**
    ```bash
    cd backend
    npm install
    # or yarn install
    cd ..
    ```

## Running the Vibe Code Feature

1.  **Start the Vibe Code Backend Server:**
    ```bash
    cd backend
    npm start # You might need to add a start script to backend/package.json
    cd ..
    ```
    *(Note: The `npm start` command assumes you have a `start` script defined in `backend/package.json` that runs your server, e.g., `node dist/server.js` or `ts-node src/server.ts`)*

2.  **Start the Frontend Development Server:**
    ```bash
    cd src
    npm run dev # or yarn dev
    cd ..
    ```

3.  Open your browser and navigate to `http://localhost:3000` (or the port specified by Vite).
    The Vibe Code UI components (Screen Share and AI Suggestions) should be visible.

## Testing

*   **Unit Tests**: Run unit tests for backend and frontend components.
    ```bash
    # Example:
    cd backend
    npm test # if configured
    cd ..
    cd src
    npm test # if configured
    cd ..
    ```
*   **Integration Tests**: Run E2E tests for the Vibe Code feature.
    ```bash
    # Example:
    npm run test:e2e # if configured
    ```
