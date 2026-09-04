import React from 'react';

// NoteItem is a reusable component that displays a single note
// It receives a note object and onDelete function as props
function NoteItem({ note, onDelete }) {
    // Format the date to be human-readable
    const formattedDate = new Date(note.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div className="note-item">
            <div className="note-item-header">
                <h3>{note.title}</h3>
                {/* When clicked, calls onDelete with this note's _id */}
                <button
                    className="delete-btn"
                    onClick={() => onDelete(note._id)}
                >
                    🗑️ Delete
                </button>
            </div>

            {/* Only show content section if content exists */}
            {note.content && (
                <p className="note-item-content">{note.content}</p>
            )}

            <span className="note-item-date">Created: {formattedDate}</span>
        </div>
    );
}

export default NoteItem;
