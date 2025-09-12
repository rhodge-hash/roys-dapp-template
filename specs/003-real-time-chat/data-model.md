# Data Model for Real-time Chat System

## User
- `id`: UUID (Primary Key)
- `username`: string (Unique)
- `email`: string (Unique)
- `password_hash`: string
- `created_at`: timestamp
- `updated_at`: timestamp

## Chat
- `id`: UUID (Primary Key)
- `type`: enum (private, group)
- `name`: string (nullable, for group chats)
- `created_at`: timestamp
- `updated_at`: timestamp

## ChatParticipant
- `chat_id`: UUID (Foreign Key to Chat)
- `user_id`: UUID (Foreign Key to User)
- `joined_at`: timestamp
- `left_at`: timestamp (nullable)
- Primary Key: (`chat_id`, `user_id`)

## Message
- `id`: UUID (Primary Key)
- `chat_id`: UUID (Foreign Key to Chat)
- `sender_id`: UUID (Foreign Key to User)
- `content`: text
- `timestamp`: timestamp
- `read_by`: array of UUIDs (users who have read the message)

## UserPresence (Managed in Redis)
- Key: `user:{user_id}:status`
- Value: `online` or `offline`
- Key: `user:{user_id}:last_seen`
- Value: timestamp
