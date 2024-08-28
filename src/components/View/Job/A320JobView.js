import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';


const A320JobView = () => {
  const imageUrls = [
    '/img/jobcontent.png',
  ];

  const settings = {
    dots: true, 
    infinite: imageUrls.length > 1, 
    speed: 500, 
    slidesToShow: 1, 
    arrows: true, 
    prevArrow: <button className="custom-arrow left">←</button>,
    nextArrow: <button className="custom-arrow right">→</button>,
  };

  return (
    <div className="image-container">
      <h1>View A320 Job Card</h1>
      <div className="lock-icon-container">
        <FontAwesomeIcon icon={faLock} className="lock-icon" />
      </div> 
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

export default A320JobView;
