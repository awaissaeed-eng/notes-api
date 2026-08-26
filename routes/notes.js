const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// GET all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET single note
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.status(200).json(note);
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid Note ID' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// POST create note
router.post('/', async (req, res) => {
  const { title, content } = req.body;

  if (!title || typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'Title is required and cannot be empty' });
  }

  if (content && typeof content !== 'string' && !Array.isArray(content)) {
    return res.status(400).json({ error: 'Content must be a string' });
  }

  try {
    const newNote = new Note({
      title: title.trim(),
      content: content ? content.trim() : ''
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT update note
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;
  const updates = {};

  if (title !== undefined) {
    if (typeof title !== 'string' || !title.trim()) {
      return res.status(400).json({ error: 'Title cannot be empty' });
    }
    updates.title = title.trim();
  }

  if (content !== undefined) {
    if (typeof content === 'string') {
      updates.content = content.trim();
    } else {
      return res.status(400).json({ error: 'Content must be a string' });
    }
  }

  try {
    const note = await Note.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.status(200).json(note);
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid Note ID' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE note
router.delete('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.status(200).json({ message: 'Note deleted' });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid Note ID' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;