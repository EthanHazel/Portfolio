import React, { useState, useEffect } from 'react';
import './glow.css';

export default function Glow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Event listener to track mouse position
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        // Add the event listener when the component mounts
        window.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const noiseStyle = {
        WebkitMaskPosition: `calc(${mousePosition.x}px - 42.5vh) calc(${mousePosition.y}px - 42.5vh)`,
        MaskPosition: `${mousePosition.x - 540}px ${mousePosition.y - 540}px`,
    };

    return <div className="glow" style={noiseStyle} />;
}
