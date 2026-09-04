import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import Loader from './components/Loader';
import './App.css';

function App() {
    // ---- State Management using useState ----
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ---- Fetch Notes from API using useEffect ----
    // useEffect runs when component mounts (empty dependency array = run once)
    useEffect(() => {
        fetchNotes();
    }, []);

    // Function to fetch all notes from the backend API
    const fetchNotes = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/notes');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setNotes(data);
        } catch (err) {
            setError('Failed to fetch notes. Make sure the backend server is running on port 3000.');
            console.error('Fetch error:', err);
        } finally {
            setLoading(false);
        }
    };

    // Function to add a new note via POST request
    const addNote = async (title, content) => {
        setError(null);
        try {
            const response = await fetch('/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to add note');
            }

            const newNote = await response.json();
            // Update state: add the new note to the beginning of the array
            // This makes the UI update immediately without a full re-fetch
            setNotes(prevNotes => [newNote, ...prevNotes]);
        } catch (err) {
            setError(err.message);
            console.error('Add note error:', err);
        }
    };

    // Function to delete a note via DELETE request
    const deleteNote = async (id) => {
        setError(null);
        try {
            const response = await fetch(`/notes/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete note');
            }

            // Update state: remove the deleted note from the array
            // filter() creates a new array without the deleted note
            setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
        } catch (err) {
            setError(err.message);
            console.error('Delete note error:', err);
        }
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>📝 Notes App</h1>
                <p>Manage your notes with ease</p>
            </header>

            <main className="app-main">
                {/* NoteForm component - receives addNote function as a prop */}
                <NoteForm onAddNote={addNote} />

                {/* Error message display */}
                {error && (
                    <div className="error-message">
                        <span>⚠️</span> {error}
                        <button onClick={() => setError(null)} className="error-close">✕</button>
                    </div>
                )}

                {/* Conditional rendering: show loader, notes, or empty state */}
                {loading ? (
                    <Loader />
                ) : (
                    /* NoteList component - receives notes array and deleteNote function as props */
                    <NoteList notes={notes} onDeleteNote={deleteNote} />
                )}
            </main>
        </div>
    );
}

export default App;