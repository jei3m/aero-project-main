import React from 'react';
import './Grid.css'; // Make sure to create this CSS file for styling
import { Card } from "./Card";

const JobWork = () => {

  return (
    <div>
      <h1 className="title"> Card Selection </h1>
      <div className="grid">
      <div className="col">

          <a href="job" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/folder.png"
          imgAlt="Card Image 1"
          title="Job Card"
          />
          </a>

          <a href="work" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/folder.png"
          imgAlt="Card Image 1"
          title="Work Card"
          />
          </a>


      </div>

      </div>
    </div>
  );
};

export default JobWork;
