# Task Manager

A full-stack task management app built with React and Node.js/Express.

## What it does

- Create tasks with a title, description, and priority level (low / medium / high)
- View all tasks in an animated infinite carousel
- Mark tasks as completed or delete them
- Input validation on both the frontend and backend

## Tech Stack

**Frontend:** React, CSS animations  
**Backend:** Node.js, Express  
**Communication:** REST API (fetch)

## How to run

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend** (in a separate terminal):
```bash
cd frontend
npm install
npm start
```

The backend runs on `http://localhost:4000` and the frontend on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |
| PATCH | `/api/tasks/:id/toggle` | Toggle completed status |

## Notes

This README was written by AI under the direction of the person who built this project.

Given more time, I would have added proper tests — both unit tests for the components and integration tests to verify the API behaves as expected. I also didn't get to finish the edit functionality before submission, and I would have put more effort into the design overall. The carousel works but the UI is pretty bare-bones compared to what I had in mind.

Data is stored in memory on the server, so it resets every time the backend restarts.
