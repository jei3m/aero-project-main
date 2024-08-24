import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './View.css'; // Include custom styles

const A320WorkView = () => {
  const imageUrls = [
    '/img/Work1.png',
    '/img/Work2.png',
    '/img/Work3.png',
    '/img/Work4.png',
    '/img/Work5.png'
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through images
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of images to show at once
    slidesToScroll: 1, // Number of images to scroll
    arrows: false, // Disable default arrows
    prevArrow: <button className="custom-arrow left">←</button>,
    nextArrow: <button className="custom-arrow right">→</button>,
  };

  return (
    <div className="image-container">
      <h1>View A320 Work Card</h1>
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
    </div>
  );
};

export default A320WorkView;
