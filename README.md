# Telegram Mini App with User Activity Tracking

This project is a Telegram Mini App that tracks and displays user activity, showing all users who have opened the app.

## Project Structure

The project consists of two main parts:
- Frontend: React-based Telegram Mini App
- Backend: Express.js server with MongoDB database

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or a MongoDB Atlas account)
- Telegram Bot Token (for the Mini App)

## Setup

1. Clone the repository
2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Set up environment variables:
   - Copy `backend/.env.example` to `backend/.env`
   - Update MongoDB connection string if needed

## Running the Application

1. Start MongoDB (if running locally)

2. Start the backend server:
```bash
cd backend
npm run dev
```

3. Start the frontend development server:
```bash
# In another terminal
npm run dev
```

4. The application should now be running at:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001

## Features

- Automatic user activity tracking when users open the app
- Display of all users who have accessed the app
- Timestamp tracking of first access
- Centralized storage using MongoDB

## API Endpoints

- `POST /api/user-activity`: Record new user access
- `GET /api/user-activity`: Get all user activity records

## Technologies Used

- Frontend:
  - React
  - TypeScript
  - Telegram Mini App SDK
  - @telegram-apps/telegram-ui

- Backend:
  - Express.js
  - MongoDB with Mongoose
  - TypeScript
  - CORS for cross-origin requests
