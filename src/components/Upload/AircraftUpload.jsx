import React from 'react';
import './GridUpload.css'; // Make sure to create this CSS file for styling
import { Card } from "./Card";

const AircraftUpload = () => {

  return (
    <div>
      <h1 className="title">Select Aircraft for Maintenance</h1>
      <div className="grid">
      <div className="col">

      <a href="filea320" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/A320.png"
          imgAlt="AIRBUS A320"
          title="AIRBUS A320"
          description=""
          />
          </a>

          <a href="filea380" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/A380.png"
          imgAlt="AIRBUS A380"
          title="AIRBUS A380"
          description=""
          />
          </a>

          <a href="file747" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/747.png"
          imgAlt="BOEING 747"
          title="BOEING 747"
          description=""
          />
          </a>


        


      </div>

      </div>
    </div>
  );
};

export default AircraftUpload;
