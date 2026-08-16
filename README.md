# Notes API

A simple REST API for creating, reading, updating, and deleting notes built with Node.js and Express.js.

## Features

- ✅ Full CRUD (Create, Read, Update, Delete) functionality
- ✅ Clean and organized REST API routes
- ✅ Input validation with error handling
- ✅ Proper HTTP status codes (200, 201, 400, 404)
- ✅ In-memory data storage
- ✅ JSON request/response format

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for building REST APIs
- **JavaScript (ES6)** - Programming language

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

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

3. Start the server:
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
    "id": 1,
    "title": "Sample note",
    "content": "This is a note"
  }
]
```

### GET /notes/:id
Retrieve a single note by ID.

**Parameters:**
- `id` (integer) - Note ID

**Response:**
```json
{
  "id": 1,
  "title": "Sample note",
  "content": "This is a note"
}
```

**Error Response (404):**
```json
{
  "error": "Note not found"
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
  "id": 2,
  "title": "My New Note",
  "content": "Note content"
}
```

**Error Response (400):**
```json
{
  "error": "Title is required and cannot be empty"
}
```

### PUT /notes/:id
Update an existing note.

**Parameters:**
- `id` (integer) - Note ID

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
  "id": 1,
  "title": "Updated Title",
  "content": "Updated content"
}
```

**Error Response (404):**
```json
{
  "error": "Note not found"
}
```

### DELETE /notes/:id
Delete a note by ID.

**Parameters:**
- `id` (integer) - Note ID

**Response (200):**
```json
{
  "message": "Note deleted"
}
```

**Error Response (404):**
```json
{
  "error": "Note not found"
}
```

## Testing with cURL

### Get all notes:
```bash
curl http://localhost:3000/notes
```

### Get a single note:
```bash
curl http://localhost:3000/notes/1
```

### Create a note:
```bash
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My Note","content":"This is my note"}'
```

### Update a note:
```bash
curl -X PUT http://localhost:3000/notes/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","content":"Updated content"}'
```

### Delete a note:
```bash
curl -X DELETE http://localhost:3000/notes/1
```

## Testing with Postman

1. Open Postman
2. Create a new collection called "Notes API"
3. Add the following requests:

#### GET /notes
- Method: GET
- URL: `http://localhost:3000/notes`

#### GET /notes/:id
- Method: GET
- URL: `http://localhost:3000/notes/1`

#### POST /notes
- Method: POST
- URL: `http://localhost:3000/notes`
- Body (raw JSON):
```json
{
  "title": "My Note",
  "content": "This is my note"
}
```

#### PUT /notes/:id
- Method: PUT
- URL: `http://localhost:3000/notes/1`
- Body (raw JSON):
```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

#### DELETE /notes/:id
- Method: DELETE
- URL: `http://localhost:3000/notes/1`

## Project Structure

```
notes-api/
├── routes/
│   ├── notes.js       # Route handlers for all endpoints
│   └── data.js        # In-memory data storage
├── server.js          # Main server file
├── package.json       # Project dependencies
├── .gitignore         # Git ignore file
└── README.md          # Documentation
```

## Validation Rules

- **Title**: Required, cannot be empty or whitespace-only
- **Content**: Optional, will be trimmed of whitespace
- **ID**: Auto-generated integer, starts at 1 and increments

## HTTP Status Codes

- `200 OK` - Successful GET, PUT, DELETE request
- `201 Created` - Successful POST request
- `400 Bad Request` - Invalid input or validation error
- `404 Not Found` - Note ID not found

## Future Enhancements

- Add database integration (MongoDB, PostgreSQL, etc.)
- Add authentication & authorization
- Add timestamps (created_at, updated_at)
- Add note categories/tags
- Add note search/filter functionality
- Add pagination for large datasets
- Add API rate limiting


## Author

Anais Saeed
