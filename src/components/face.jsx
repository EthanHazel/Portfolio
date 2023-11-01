import React, { useRef, useState, useEffect } from 'react';
import './face.css';

export default function Face(props) {
    const faceImageRef = useRef(null);
    const [shadowX, setShadowX] = useState(0);
    const [shadowY, setShadowY] = useState(0);

    useEffect(() => {
        const faceImage = faceImageRef.current;

        const updateShadow = (e) => {
            const boundingBox = faceImage.getBoundingClientRect();
            const centerX = boundingBox.left + boundingBox.width / 2;
            const centerY = boundingBox.top + boundingBox.height / 2;
            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
            const distance = Math.min(Math.hypot(e.clientX - centerX, e.clientY - centerY), 100);

            const offsetX = distance * Math.cos(angle);
            const offsetY = distance * Math.sin(angle);

            setShadowX(offsetX / 50); // Adjust the values as needed
            setShadowY(offsetY / 50); // Adjust the values as needed
        };

        const onMouseMove = (e) => {
            updateShadow(e);
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div className='faceContainer'>
            <img className='faceOverlay' src='../assets/photo_gradient_overlay.png' />
            <img
                className='faceImage'
                ref={faceImageRef}
                src={props.source}
                style={{
                    filter: `drop-shadow(${-shadowX}vh ${-shadowY}vh 3vh var(--background))`,
                }}
            />
            <img className='faceBackground' src='../assets/photo_gradient.png' />
            <img className='faceBackgroundBlur' src='../assets/photo_gradient.png' />
        </div>
    );
}
