# Notes App — Full Stack (API + React Frontend)

A full-stack notes application with a REST API backend (Node.js, Express, MongoDB) and a React frontend that lets users view, create, and delete notes.

## Features

### Backend (REST API)
- ✅ Full CRUD (Create, Read, Update, Delete) endpoints
- ✅ MongoDB data storage using Mongoose
- ✅ Input validation with proper error handling
- ✅ Proper HTTP status codes (200, 201, 400, 404)
- ✅ CORS enabled for frontend communication

### Frontend (React)
- ✅ View all notes fetched from the API
- ✅ Add new notes through a form
- ✅ Delete notes with one click
- ✅ Live UI updates when data changes (no page refresh)
- ✅ Loading spinner and error state handling
- ✅ Responsive design

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Backend | Express.js |
| Database | MongoDB Atlas + Mongoose |
| Frontend | React 19 |
| HTTP Client | Fetch API |

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- A MongoDB Atlas account and cluster (or local MongoDB)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/awaissaeed-eng/notes-api.git
cd notes-api
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
cd ..
```

4. Set up environment variables:

Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/notes-db?retryWrites=true&w=majority
PORT=3000
```

### Running the App

**Run both backend and frontend together (recommended):**
```bash
npm run dev
```

This starts:
- Backend API on `http://localhost:3000`
- React frontend on `http://localhost:3001`

Open `http://localhost:3001` in your browser.

**Or run them separately:**

Terminal 1 — Backend:
```bash
npm run server
```

Terminal 2 — Frontend:
```bash
npm run client
```

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/notes` | Get all notes |
| GET | `/notes/:id` | Get a single note by ID |
| POST | `/notes` | Create a new note |
| PUT | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Delete a note |

### POST /notes — Request Body
```json
{
  "title": "My Note",
  "content": "Note content"
}
```

### PUT /notes/:id — Request Body
```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

## React Components

| Component | Props | Purpose |
|-----------|-------|---------|
| `App` | — | Main component, manages state and API calls |
| `NoteForm` | `onAddNote` | Form to create a new note |
| `NoteList` | `notes`, `onDeleteNote` | Renders the list of notes |
| `NoteItem` | `note`, `onDelete` | Displays a single note card |
| `Loader` | — | Shows a loading spinner |

## Project Structure

```
notes-api/
├── client/                     # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteForm.js     # Form to add new notes
│   │   │   ├── NoteList.js     # Displays list of notes
│   │   │   ├── NoteItem.js     # Single note card (reusable)
│   │   │   └── Loader.js       # Loading spinner
│   │   ├── App.js              # Main app component
│   │   ├── App.css             # App styles
│   │   ├── index.js            # React entry point
│   │   └── index.css           # Global styles
│   └── package.json
├── models/
│   └── Note.js                 # Mongoose schema and model
├── routes/
│   └── notes.js                # API route handlers
├── .env                        # Environment variables (not in git)
├── server.js                   # Express server with CORS
├── package.json                # Backend dependencies and scripts
├── .gitignore
└── README.md
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster0.mongodb.net/` |
| `PORT` | Backend server port (default: 3000) | `3000` |

## License
ISC
