'use client'

import React, { useState, useEffect } from 'react';
import './mouse.css';

function Mouse() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    // console.log(cursorPosition)
    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
            <div
                className="circle"
                style={{
                    left: cursorPosition.x + 'px',
                    top: cursorPosition.y + 'px',
                }}
            ></div>
    );
}

export default Mouse;
