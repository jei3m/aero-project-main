// Importing necessary components
import React from 'react'; 
import './Grid.css';  
import { Card } from "./Card"; 

const JobCard = () => {

  return (
    <div>
      <h1 className="title"> Job Card </h1> {/* Page title styled by the "title" class in the CSS */}
      
      <div className="grid"> {/* Main container for the grid layout */}
        <div className="col"> {/* Column container for holding the Card components */}

          {/* Link wrapping the Card component for "Upload Job Card" */}
          <a href="jobaircraft" style={{ textDecoration: 'none', color: 'inherit' }}> 
            <Card
              imgSrc="/img/folder.png" // Source of the image displayed on the card.
              imgAlt="Card Image 1" // Alt text for accessibility.
              title="Upload" // Title displayed on the card.
            />
          </a>

          {/* Link wrapping the Card component for "Edit Job Card" */}
          <a href="jobeditaircraft" style={{ textDecoration: 'none', color: 'inherit' }}> 
            <Card
              imgSrc="/img/folder.png" // Source of the image displayed on the card.
              imgAlt="Card Image 1" // Alt text for accessibility.
              title="Edit" // Title displayed on the card.
            />
          </a>

          {/* Link wrapping the Card component for "View Job Card" */}
          <a href="jobviewaircraft" style={{ textDecoration: 'none', color: 'inherit' }}> 
            <Card
              imgSrc="/img/folder.png" // Source of the image displayed on the card.
              imgAlt="Card Image 1" // Alt text for accessibility.
              title="View" // Title displayed on the card.
            />
          </a>

        </div>
      </div>

      <h1></h1> {/* Empty header element, could be removed if not needed */}
    </div>
  );
};

export default JobCard; // Exporting the component for use in other parts of the application.
