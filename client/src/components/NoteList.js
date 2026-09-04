import React from 'react';
import NoteItem from './NoteItem';

// NoteList receives notes array and onDeleteNote function as props
function NoteList({ notes, onDeleteNote }) {
    // If there are no notes, show an empty state message
    if (notes.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">📭</div>
                <p>No notes yet. Add your first note above!</p>
            </div>
        );
    }

    return (
        <div className="notes-list">
            <h2>📋 Your Notes</h2>
            <p className="note-count">{notes.length} note{notes.length !== 1 ? 's' : ''}</p>

            {/* Map through notes array and render a NoteItem for each */}
            {notes.map((note) => (
                <NoteItem
                    key={note._id}
                    note={note}
                    onDelete={onDeleteNote}
                />
            ))}
        </div>
    );
}

export default NoteList;
