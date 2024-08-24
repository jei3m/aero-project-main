import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './View.css'; // Include custom styles
import { FaRobot } from 'react-icons/fa'; // Import Font Awesome robot icon

const A380JobView = () => {
  const imageUrl = '/img/jobcontent.png'; // Update with your image file path
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
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

  return (
    <div className="image-container">
      <h1>View A380 Job Card</h1>
      <div
        className="image-viewer"
        ref={containerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
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
      <div className="ask-aerobot-container">
        <Link to="/chat" className="ask-aerobot-button">
          <FaRobot size={24} /> {/* Adjust the icon size as needed */}
        </Link>
        <div className="text-bubble">
          Ask Aerobot
        </div>
      </div>
    </div>
  );
}

export default A380JobView;
