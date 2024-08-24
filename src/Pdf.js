import React, { useState, useRef } from 'react';
import './Pdf.css'; // Include custom styles

const Pdf = () => {
  const imageUrl = '/img/jobcontent.png'; // Update with your image file path
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState(null);
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    const zoom = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prevScale => Math.min(Math.max(prevScale * zoom, 1), 3)); // Limits scale between 1x and 3x
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX - startX,
        y: e.clientY - startY
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setStartPosition({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y
      });
    } else if (e.touches.length === 2) {
      const [touch1, touch2] = e.touches;
      const initialDistance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      setStartPosition({
        x: (touch1.clientX + touch2.clientX) / 2 - position.x,
        y: (touch1.clientY + touch2.clientY) / 2 - position.y,
        initialDistance
      });
    }
  };

  const handleTouchMove = (e) => {
    if (startPosition) {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        setPosition({
          x: touch.clientX - startPosition.x,
          y: touch.clientY - startPosition.y
        });
      } else if (e.touches.length === 2) {
        const [touch1, touch2] = e.touches;
        const newDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        const scaleChange = newDistance / startPosition.initialDistance;
        setScale(prevScale => Math.min(Math.max(prevScale * scaleChange, 1), 3));
        setStartPosition({
          x: (touch1.clientX + touch2.clientX) / 2 - position.x,
          y: (touch1.clientY + touch2.clientY) / 2 - position.y,
          initialDistance: startPosition.initialDistance
        });
      }
    }
  };

  const handleTouchEnd = () => {
    setStartPosition(null);
  };

  return (
    <div className="image-container">
      <h1>View</h1>
      <div
        className="image-viewer"
        ref={containerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={imageUrl}
          alt="View"
          style={{
            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
            transformOrigin: '0 0',
          }}
        />
      </div>
    </div>
  );
}

export default Pdf;
