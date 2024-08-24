import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import './FileUpload.css';
import { Button, Grid, Card, CardContent, Typography } from '@mui/material';
import FileUploader from './FileUploader';

function WorkFileUploadA380() {
  const [selectedFile, setSelectedFile] = useState(null); // State for tracking the selected file
  const navigate = useNavigate(); // Initialize navigate

  const onSelectFileHandler = (e) => {
    setSelectedFile(e.target.files[0]); // Store the selected file in state
  };

  const onDeleteFileHandler = () => {
    setSelectedFile(null); // Clear the selected file
  };

  const onDownloadTemplate = () => {
    const link = document.createElement('a');
    link.href = '/files/WorkTemplate.pdf'; // Replace with your file path
    link.download = 'WorkTemplate.pdf'; // File name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onSaveHandler = () => {
    if (selectedFile) {
      navigate('/a380workupload'); // Navigate to the next page
    } else {
      alert('Please select a file before saving.');
    }
  };

  return (
    <div className="Appok">
      <h1 className="title"> AIRBUS A380 </h1>
      <Card className="app-formfile">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography align='left' variant="h6">Upload Document</Typography>
              <FileUploader onSelectFile={onSelectFileHandler} onDeleteFile={onDeleteFileHandler} />
            </Grid>

            <Grid item xs={12} p={2} align='left'>
              <Typography variant="body2">
                If you do not have a file, use the sample below:
              </Typography>
              <Button variant="outlined" onClick={onDownloadTemplate} style={{ marginTop: "0.5rem" }}>
                Download a Sample Template
              </Button>
            </Grid>

            <Grid item xs={12} p={2} style={{ textAlign: 'end' }}>
              <Button
                variant="outlined"
                style={{ marginLeft: "1rem" }}
                onClick={onDeleteFileHandler} // Reuse delete handler for cancel
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{ marginLeft: "1rem" }}
                onClick={onSaveHandler}
                disabled={!selectedFile} // Disable if no file is selected
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default WorkFileUploadA380;
