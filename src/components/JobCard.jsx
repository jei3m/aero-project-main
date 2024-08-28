import React from 'react';
import './Grid.css'; 
import { Card } from "./Card";

const JobCard = () => {

  return (
    <div>
      <h1 className="title"> Job Card </h1>
      <div className="grid">
      <div className="col">

          <a href="jobaircraft" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/folder.png"
          imgAlt="Card Image 1"
          title="Upload"
          />
          </a>

          <a href="jobeditaircraft" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/folder.png"
          imgAlt="Card Image 1"
          title="Edit"
          />
          </a>

          <a href="jobviewaircraft" style={{ textDecoration: 'none', color: 'inherit' }}>
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

export default JobCard;
