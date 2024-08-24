import React from 'react';
import { Container, Typography, Card, CardContent, Box, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const UploadedJobA320 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/select');
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card
        variant="outlined"
        style={{
          maxWidth: 400,
          textAlign: 'center',
          borderRadius: '10px',
          borderColor: '#ddd',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CheckCircleIcon style={{ color: '#4caf50', fontSize: '5rem' }} />
            <Typography variant="h5" style={{ marginTop: '20px' }}>
              AIRBUS A320 Job Card is Successfully Uploaded!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
              onClick={handleButtonClick}
            >
             Back to Card Selection
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UploadedJobA320;
