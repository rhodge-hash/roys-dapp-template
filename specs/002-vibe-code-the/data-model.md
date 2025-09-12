# Data Model for Vibe Code

## DeveloperSession
- `sessionId`: string (unique ID)
- `status`: enum (active, inactive, paused)
- `connectedUsers`: array of user IDs
- `startTime`: datetime
- `endTime`: datetime (nullable)

## ScreenFrame
- `frameId`: string (unique ID)
- `sessionId`: string (foreign key to DeveloperSession)
- `timestamp`: datetime
- `imageData`: base64 encoded image data
- `metadata`: JSON (e.g., active window, cursor position)

## AISuggestion
- `suggestionId`: string (unique ID)
- `sessionId`: string (foreign key to DeveloperSession)
- `timestamp`: datetime
- `type`: enum (code_completion, refactoring, bug_fix, general_advice)
- `content`: string (the suggestion text/code)
- `context`: JSON (e.g., file path, line numbers, code snippet)
- `status`: enum (pending, accepted, rejected, modified)

## UserFeedback
- `feedbackId`: string (unique ID)
- `suggestionId`: string (foreign key to AISuggestion)
- `userId`: string
- `timestamp`: datetime
- `type`: enum (accepted, rejected, modified)
- `comment`: string (nullable)
