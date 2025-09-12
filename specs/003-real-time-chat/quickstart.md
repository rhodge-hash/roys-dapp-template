# Quickstart Guide for Real-time Chat System

## Prerequisites
- Node.js (v18+)
- npm or yarn
- Docker (for PostgreSQL and Redis)

## Setup
1. Clone the repository:
   `git clone [repo-url]`
2. Install backend dependencies:
   `cd backend`
   `npm install` (or `yarn install`)
   `cd ..`
3. Install frontend dependencies:
   `cd src`
   `npm install` (or `yarn install`)
   `cd ..`
4. Start PostgreSQL and Redis using Docker Compose (assuming a `docker-compose.yml` will be provided):
   `docker-compose up -d postgres redis`
5. Run database migrations (assuming a migration tool will be provided):
   `npm run migrate` (or similar)

## Running the Application
1. Start the backend service:
   `cd backend`
   `npm start` (or similar)
   `cd ..`
2. Start the frontend application:
   `cd src`
   `npm run dev` (or `yarn dev`)
   `cd ..`
3. Access the application in your browser at `http://localhost:3000`.

## Configuration
- Environment variables for database connection, Redis connection, and WebSocket port.
