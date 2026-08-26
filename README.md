# Notes API

A simple REST API for creating, reading, updating, and deleting notes built with Node.js, Express.js, and MongoDB.

## Features

- ✅ Full CRUD (Create, Read, Update, Delete) functionality
- ✅ Clean and organized REST API routes
- ✅ Input validation with error handling
- ✅ Proper HTTP status codes (200, 201, 400, 404)
- ✅ **MongoDB data storage using Mongoose**
- ✅ JSON request/response format
- ✅ Secure environment variables for credentials

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for building REST APIs
- **MongoDB & Mongoose** - NoSQL database and Object Data Modeling (ODM) library
- **JavaScript (ES6)** - Programming language

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- A MongoDB Atlas account and cluster (or local MongoDB)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd notes-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your MongoDB connection string:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/notes-db?retryWrites=true&w=majority
PORT=3000
```

4. Start the server:
```bash
node server.js
```

The server will run on `http://localhost:3000`

## API Endpoints

### GET /notes
Retrieve all notes.

**Response:**
```json
[
  {
    "_id": "60d5ecb8b392cb22c448f700",
    "title": "Sample note",
    "content": "This is a note",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z",
    "__v": 0
  }
]
```

### GET /notes/:id
Retrieve a single note by ID.

**Parameters:**
- `id` (string) - MongoDB Object ID

**Response:**
```json
{
  "_id": "60d5ecb8b392cb22c448f700",
  "title": "Sample note",
  "content": "This is a note",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z",
  "__v": 0
}
```

### POST /notes
Create a new note.

**Request Body:**
```json
{
  "title": "My New Note",
  "content": "Note content"
}
```

**Response (201):**
```json
{
  "_id": "60d5ecb8b392cb22c448f701",
  "title": "My New Note",
  "content": "Note content",
  "createdAt": "2023-01-01T00:01:00.000Z",
  "updatedAt": "2023-01-01T00:01:00.000Z",
  "__v": 0
}
```

### PUT /notes/:id
Update an existing note.

**Parameters:**
- `id` (string) - MongoDB Object ID

**Request Body:**
```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

**Response (200):**
```json
{
  "_id": "60d5ecb8b392cb22c448f700",
  "title": "Updated Title",
  "content": "Updated content",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:02:00.000Z",
  "__v": 0
}
```

### DELETE /notes/:id
Delete a note by ID.

**Parameters:**
- `id` (string) - MongoDB Object ID

**Response (200):**
```json
{
  "message": "Note deleted"
}
```

## Testing with Postman

1. Open Postman
2. Create a new collection called "Notes API - MongoDB"
3. Test your `POST` endpoint first to get an auto-generated `_id`, then use that `_id` in the URL for your `GET /:id`, `PUT /:id`, and `DELETE /:id` requests.

## Project Structure

```
notes-api/
├── models/
│   └── Note.js        # Mongoose Schema and Model
├── routes/
│   └── notes.js       # Route handlers for all endpoints
├── .env               # Environment variables (DB credentials)
├── server.js          # Main server file
├── package.json       # Project dependencies
├── .gitignore         # Git ignore file
└── README.md          # Documentation
```

