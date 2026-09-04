import React from 'react';

// Simple loading spinner component - no props needed
function Loader() {
    return (
        <div className="loader-container">
            <div className="spinner"></div>
            <p>Loading notes...</p>
        </div>
    );
}

export default Loader;
