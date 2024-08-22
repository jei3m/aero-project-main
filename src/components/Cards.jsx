import React from 'react';
import './Grid.css'; // Make sure to create this CSS file for styling
import { Card } from "./Card";

const Cards = () => {

  return (
    <div>
      <h1 className="title">Airplanes</h1>
      <div className="grid">
      <div className="col">
        <Card
          imgSrc="/img/boeing.jpeg"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />

          <a href="login" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/boeing.jpeg"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          />
          </a>

        <Card
          imgSrc="/img/boeing.jpeg"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        
        <Card
          imgSrc="/img/boeing.jpeg"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgSrc="/img/boeing.jpeg"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
      </div>

      </div>
    </div>
  );
};

export default Cards;
