import React from 'react'; // Importing React to create the component.
import './Grid.css';  // Importing the CSS file for styling the grid layout.
import { Card } from "./Card"; // Importing the Card component to be used within the grid.

const JobWork = () => {

  return (
    <div>
      <h1 className="title"> Card Selection </h1> {/* Page title styled by the "title" class in the CSS */}
      
      <div className="grid"> {/* Main container for the grid layout */}
        <div className="col"> {/* Column container for holding the Card components */}

          {/* Link wrapping the Card component for "Job Card" */}
          <a href="job" style={{ textDecoration: 'none', color: 'inherit' }}> 
            <Card
              imgSrc="/img/folder.png" // Source of the image displayed on the card.
              imgAlt="Card Image 1" // Alt text for accessibility.
              title="Job Card" // Title displayed on the card.
            />
          </a>

          {/* Link wrapping the Card component for "Work Card" */}
          <a href="work" style={{ textDecoration: 'none', color: 'inherit' }}> 
            <Card
              imgSrc="/img/folder.png" // Source of the image displayed on the card.
              imgAlt="Card Image 1" // Alt text for accessibility.
              title="Work Card" // Title displayed on the card.
            />
          </a>

        </div>
      </div>
    </div>
  );
};

export default JobWork; // Exporting the component for use in other parts of the application.
