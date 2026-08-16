const data = require('./data');
const { notes } = data;

const express = require('express');
const router = express.Router();

// GET all notes
router.get('/', (req, res) => {
  res.status(200).json(notes);
});

// GET single note
router.get('/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ error: 'Note not found' });
  res.status(200).json(note);
});

// POST create note
router.post('/', (req, res) => {
  const { title, content } = req.body;

  if (!title || typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'Title is required and cannot be empty' });
  }

  if (content && typeof content !== 'string' && !Array.isArray(content)) {
    return res.status(400).json({ error: 'Content must be a string' });
  }

  const newNote = {
    id: data.nextId++,
    title: title.trim(),
    content: content ? content.trim() : ''
  };

  notes.push(newNote);
  res.status(201).json(newNote);
});

// PUT update note
router.put('/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ error: 'Note not found' });

  const { title, content } = req.body;

  if (title !== undefined) {
    if (typeof title !== 'string' || !title.trim()) {
      return res.status(400).json({ error: 'Title cannot be empty' });
    }
    note.title = title.trim();
  }

  if (content !== undefined) {
    if (typeof content === 'string') {
      note.content = content.trim();
    } else {
      return res.status(400).json({ error: 'Content must be a string' });
    }
  }

  res.status(200).json(note);
});

// DELETE note
router.delete('/:id', (req, res) => {
  const index = notes.findIndex(n => n.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Note not found' });
  notes.splice(index, 1);
  res.status(200).json({ message: 'Note deleted' });
});

module.exports = router;