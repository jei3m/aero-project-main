import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './View.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const A380WorkView = () => {
  const imageUrls = [
    '/img/Work1.png',
    '/img/Work2.png',
    '/img/Work3.png',
    '/img/Work4.png',
    '/img/Work5.png'
  ];

  const settings = {
    dots: true, 
    infinite: imageUrls.length > 1,
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    arrows: false,
    prevArrow: <button className="custom-arrow left">←</button>,
    nextArrow: <button className="custom-arrow right">→</button>,
  };

  return (
    <div className="image-container">
      <div className="lock-icon-container">
        <FontAwesomeIcon icon={faLock} className="lock-icon" />
      </div>
      <h1>View A380 Work Card</h1>
      <div className="carousel-container">
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

export default A380WorkView;
