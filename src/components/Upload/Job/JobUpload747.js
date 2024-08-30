// Import necessary hooks, components, and styles.
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../FileUpload.css'; 
import { Button, Grid, Card, CardContent, Typography } from '@mui/material'; 
import FileUploader from './FileUploader'; 

function JobFileUpload747() {
  // State to track the selected file. Initially, no file is selected.
  const [selectedFile, setSelectedFile] = useState(null);
  
  // useNavigate hook for programmatic navigation.
  const navigate = useNavigate();

  // Handler function for file selection.
  const onSelectFileHandler = (e) => {
    setSelectedFile(e.target.files[0]); // Store the selected file in the state.
  };

  // Handler function to cancel the file selection and navigate back.
  const onCancelHandler = () => {
    setSelectedFile(null); // Clear the selected file from the state.
    navigate(-1); // Navigate to the previous page.
  };

  // Function to download a template file.
  const onDownloadTemplate = () => {
    const link = document.createElement('a'); // Create a link element dynamically.
    link.href = '/files/JobTemplate.pdf'; // Set the href to the file path.
    link.download = 'JobTemplate.pdf'; // Set the file name for download.
    document.body.appendChild(link); // Append the link to the document body.
    link.click(); // Programmatically click the link to start the download.
    document.body.removeChild(link); // Remove the link from the document after download.
  };

  // Handler function to save the selected file and navigate to the next page.
  const onSaveHandler = () => {
    if (selectedFile) { // Check if a file is selected.
      navigate('/747jobupload'); // Navigate to the job upload page.
    } else {
      alert('Please select a file before saving.'); // Alert the user if no file is selected.
    }
  };

  // JSX returned by the component to render the UI.
  return (
    <div className="Appok"> {/* Main container with a custom class for styling */}
      <h1 className="title"> BOEING 747 </h1> {/* Title of the form */}
      <Card className="app-formfile"> {/* Card component with custom styling */}
        <CardContent> {/* Content area of the card */}
          <Grid container spacing={2}> {/* Grid layout with spacing between items */}
            <Grid item xs={12}> {/* Grid item spanning 12 columns (full width) */}
              <Typography align='left' variant="h6">Upload Document</Typography> {/* Section title */}
              {/* Custom file uploader component with handlers for file selection and deletion */}
              <FileUploader onSelectFile={onSelectFileHandler} onDeleteFile={onCancelHandler} />
            </Grid>

            <Grid item xs={12} p={2} align='left'> {/* Grid item for download section */}
              <Typography variant="body2">
                If you do not have a file, use the sample below:
              </Typography>
              <Button variant="outlined" onClick={onDownloadTemplate} style={{ marginTop: "0.5rem" }}>
                Download a Sample Template
              </Button>
            </Grid>

            <Grid item xs={12} p={2} style={{ textAlign: 'end' }}> {/* Grid item for action buttons */}
              <Button
                variant="outlined"
                style={{ marginLeft: "1rem" }}
                onClick={onCancelHandler} // Cancel button using the cancel handler
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{ marginLeft: "1rem" }}
                onClick={onSaveHandler} // Save button using the save handler
                disabled={!selectedFile} // Disable save button if no file is selected
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

// Export the component as the default export.
export default JobFileUpload747;
