// Importing necessary components and hooks from React, Material-UI, and React Router DOM.
import React from 'react';
import { Container, Typography, Card, CardContent, Box, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

// Functional component definition for UploadedJob747.
const UploadedJob747 = () => {
  // useNavigate hook is used to programmatically navigate to different routes.
  const navigate = useNavigate();

  // Function to handle button click and navigate to the '/select' route.
  const handleButtonClick = () => {
    navigate('/select');
  };

  // JSX returned by the component to render the UI.
  return (
    // Container component from Material-UI with styling for centering content vertically and horizontally.
    <Container
      maxWidth="sm" // Sets the maximum width of the container to 'sm' (small breakpoint).
      style={{
        display: 'flex', // Flexbox layout is used for centering.
        justifyContent: 'center', // Center content horizontally.
        alignItems: 'center', // Center content vertically.
        height: '100vh', // Container height is set to fill the entire viewport height.
      }}
    >
      {/* Card component with custom styling for outlining, rounding corners, and adding a box shadow. */}
      <Card
        variant="outlined" // Outlined variant of the card.
        style={{
          maxWidth: 400, // Maximum width of the card.
          textAlign: 'center', // Center-align text inside the card.
          borderRadius: '10px', // Rounded corners with a 10px radius.
          borderColor: '#ddd', // Light gray border color.
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for a 3D effect.
        }}
      >
        {/* CardContent wraps the content inside the card. */}
        <CardContent>
          {/* Box component for flexbox layout within the card content. */}
          <Box
            display="flex" // Flexbox layout.
            flexDirection="column" // Arrange items in a column.
            justifyContent="center" // Center content vertically.
            alignItems="center" // Center content horizontally.
          >
            {/* Icon to visually indicate success, styled with a green color and large size. */}
            <CheckCircleIcon style={{ color: '#4caf50', fontSize: '5rem' }} />
            {/* Typography component for the success message, with margin-top to separate it from the icon. */}
            <Typography variant="h5" style={{ marginTop: '20px' }}>
              BOEING 747 Job Card is Successfully Uploaded!
            </Typography>
            {/* Button for navigating back to card selection, styled with a margin-top and primary color. */}
            <Button
              variant="contained" // Solid background button.
              color="primary" // Primary color (usually blue) for the button.
              style={{ marginTop: '20px' }} // Margin at the top to separate from the text above.
              onClick={handleButtonClick} // Trigger navigation when the button is clicked.
            >
             Back to Card Selection
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

// Exporting the UploadedJob747 component as the default export.
export default UploadedJob747;
