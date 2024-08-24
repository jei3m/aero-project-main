import React from 'react';
import './Grid.css'; // Make sure to create this CSS file for styling
import { Card } from "./Card";

const WorkCard = () => {

  return (
    <div>
      <h1 className="title"> Work Card </h1>
      <div className="grid">
      <div className="col">

          <a href="workaircraft" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/folder.png"
          imgAlt="Card Image 1"
          title="Upload"
          />
          </a>

          <a href="workeditaircraft" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/folder.png"
          imgAlt="Card Image 1"
          title="Edit"
          />
          </a>

          <a href="aircraft" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/folder.png"
          imgAlt="Card Image 1"
          title="View"
          />
          </a>


      </div>

      </div>
      <h1></h1>
    </div>
  );
};

export default WorkCard;
