import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './View.css'; // Include custom styles

const WorkView747 = () => {
  const imageUrls = [
    '/img/Work1.png',
    '/img/Work2.png',
    '/img/Work3.png',
    '/img/Work4.png',
    '/img/Work5.png'
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: imageUrls.length > 1,
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of images to show at once
    slidesToScroll: 1, // Number of images to scroll
    arrows: false, // Disable default arrows
    prevArrow: <button className="custom-arrow left">←</button>,
    nextArrow: <button className="custom-arrow right">→</button>,
  };

  return (
    <div className="image-container">
      <h1>View BOEING 747 Work Card</h1>
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index} className="image-viewer">
            <img
              src={url}
              alt={`View ${index}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
      {/* Add Chathead and Text Bubble */}
      <div className="ask-aerobot-container">
      <a href="/chat" className="ask-aerobot-button">
        <img
              src="/img/askaero.png"
              alt="profile"
              className="profile-pic"
            />
        </a>
        <div className="text-bubble">
          Ask Aerobot!
        </div>
      </div>
    </div>
  );
};

export default WorkView747;
