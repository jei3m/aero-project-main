import { Button, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import AttachmentIcon from "@mui/icons-material/Attachment";
import DeleteIcon from "@mui/icons-material/Delete";
import "../FileUploader.css";

function FileUploader(props) {
  const { onSelectFile, onDeleteFile, disabled } = props;
  const hiddenFileInput = useRef(null);
  const [file, setFile] = useState(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    
    // Check if the selected file is a PDF
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      onSelectFile(event);
    } else {
      // Display a warning if the file is not a PDF
      alert("Please select a PDF file.");
      hiddenFileInput.current.value = null; // Clear the file input
      setFile(null);
    }
  };

  const onDeleteFileHandler = () => {
    setFile(null);
    hiddenFileInput.current.value = null;
    onDeleteFile();
  };

  return (
    <div className="file-uploader">
      <div className={`file-div ${disabled && "disabled"}`}>
        <Button
          className="attachment-icon"
          onClick={handleClick}
          disabled={disabled}
        >
          <AttachmentIcon />
          <input
            type="file"
            id="actual-btn"
            accept=".pdf" // Accept only PDF files
            ref={hiddenFileInput}
            onChange={handleChange}
            hidden
            disabled={disabled}
            data-testid="file-upload-input"
          />
          <div className="file-name">
            {file ? <div>{file?.name}</div> : <div>Choose file</div>}
          </div>
        </Button>
      </div>
      <div className={`${disabled && "disabled"}`}>
        <IconButton
          aria-label="delete"
          disabled={disabled}
          color="primary"
          onClick={onDeleteFileHandler}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default FileUploader;
