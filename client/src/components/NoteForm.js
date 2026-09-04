import React, { useState } from 'react';

// NoteForm receives onAddNote function as a prop from App.js
function NoteForm({ onAddNote }) {
    // Local state for form inputs using useState
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [submitting, setSubmitting] = useState(false);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        // Validation: title is required
        if (!title.trim()) {
            alert('Please enter a title');
            return;
        }

        setSubmitting(true);
        // Call the addNote function passed from App.js via props
        await onAddNote(title.trim(), content.trim());
        // Clear form after successful submission
        setTitle('');
        setContent('');
        setSubmitting(false);
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <h2>✏️ Add New Note</h2>

            <div className="form-group">
                <label htmlFor="title">Title *</label>
                <input
                    id="title"
                    type="text"
                    placeholder="Enter note title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    placeholder="Enter note content (optional)..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            <button type="submit" className="submit-btn" disabled={submitting}>
                {submitting ? 'Adding...' : '➕ Add Note'}
            </button>
        </form>
    );
}

export default NoteForm;
