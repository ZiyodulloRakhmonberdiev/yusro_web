import React from 'react';
import './loading.css'; // CSS for the loader

function Loading() {
    return (
        <div className="loader-overlay">
            <div className="loader"></div>
        </div>
    );
}

export default Loading;
