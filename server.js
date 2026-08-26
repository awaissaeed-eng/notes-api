require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const notesRoutes = require('./routes/notes');

app.use(express.json()); // middleware to parse JSON body
app.use('/notes', notesRoutes);

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
if (mongoURI) {
  mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Could not connect to MongoDB Atlas:', err));
} else {
  console.log('No MONGO_URI provided in .env, skipping MongoDB connection');
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));