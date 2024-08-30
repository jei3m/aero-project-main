// Importing all needed components
import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLock } from '@fortawesome/free-solid-svg-icons'; 

const JobView747 = () => {
  // Array of image URLs to be displayed in the carousel
  const imageUrls = [
    '/img/jobcontent.png', // Path to the image
  ];

  // Settings for the Slick carousel
  const settings = {
    dots: true, // Show navigation dots below the carousel
    infinite: imageUrls.length > 1, // Enable infinite scrolling only if more than one image is present
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    arrows: true, // Show navigation arrows
    prevArrow: <button className="custom-arrow left">←</button>, // Custom previous arrow
    nextArrow: <button className="custom-arrow right">→</button>, // Custom next arrow
  };

  return (
    <div className="image-container"> {/* Main container for the component */}
      <h1>View BOEING 747 Job Card</h1> {/* Title of the view */}
      <div className="lock-icon-container"> {/* Container for the lock icon */}
        <FontAwesomeIcon icon={faLock} className="lock-icon" /> {/* Lock icon indicating restricted access */}
      </div> 
      <Slider {...settings}> {/* Slider component with defined settings */}
        {imageUrls.map((url, index) => (
          <div key={index} className="image-viewer"> {/* Container for each slide */}
            <img
              src={url} // Source of the image
              alt={`View ${index}`} // Alt text for the image
              className="carousel-image" // Class for image styling
            />
          </div>
        ))}
      </Slider>
      <div className="ask-aerobot-container"> {/* Container for the ask Aerobot section */}
        <a href="/chat" className="ask-aerobot-button"> {/* Link to chat with Aerobot */}
          <img
            src="/img/askaero.png" // Path to the Aerobot image
            alt="profile" // Alt text for the image
            className="profile-pic" // Class for profile picture styling
          />
        </a>
        <div className="text-bubble"> {/* Bubble text for asking Aerobot */}
          Ask Aerobot!
        </div>
      </div>
    </div>
  );
};

export default JobView747; // Export the component for use in other parts of the application
