import React, { useEffect, useRef, useState } from 'react';
import './container.css';

export default function Container(props) {
  const containerClass = `${props.size}Container`;

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Intersection Observer callback function
  const handleIntersect = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className={containerClass} ref={containerRef}>
      <div className={`container ${isVisible ? 'fade-in' : ''}`}>
        {props.children}
      </div>
    </div>
  );
}
