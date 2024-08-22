import React from 'react';
import './Grid.css'; // Make sure to create this CSS file for styling
import { Card } from "./Card";

const JobCard = () => {

  return (
    <div>
      <h1 className="title"> Job Card </h1>
      <div className="grid">
      <div className="col">

          <a href="login" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/folder.png"
          imgAlt="Card Image 1"
          title="Upload"
          />
          </a>

          <a href="login" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/folder.png"
          imgAlt="Card Image 1"
          title="Edit"
          />
          </a>

          <a href="login" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/folder.png"
          imgAlt="Card Image 1"
          title="View"
          />
          </a>


      </div>

      </div>
    </div>
  );
};

export default JobCard;
