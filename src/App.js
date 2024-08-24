import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import Cards from './components/Cards';
import JobWork from "./components/JobWork";
import JobCard from "./components/JobCard";
import WorkCard from "./components/WorkCard";
import Document from "./components/Document";



import FileUploadA320 from "./components/Upload/FileUploadA320";
import FileUploadA380 from "./components/Upload/FileUploadA380";
import FileUpload747 from "./components/Upload/FileUpload747";
import AircraftUpload from "./components/Upload/AircraftUpload";

import JobFileUpload747 from "./components/Upload/Job/JobUpload747";
import JobFileUploadA320 from "./components/Upload/Job/JobUploadA320";
import JobFileUploadA380 from "./components/Upload/Job/JobUploadA380";
import JobAircraftUpload from "./components/Upload/Job/JobAircraftUpload";
import UploadedJob747 from "./components/Upload/Job/747UploadedJob";
import UploadedJobA380 from "./components/Upload/Job/A380UploadedJob";
import UploadedJobA320 from "./components/Upload/Job/A320UploadedJob";
import WorkAircraftUpload from "./components/Upload/Work/WorkAircraftUpload";
import WorkFileUpload747 from "./components/Upload/Work/WorkUpload747";
import WorkFileUploadA320 from "./components/Upload/Work/WorkUploadA320";
import WorkFileUploadA380 from "./components/Upload/Work/WorkUploadA380";
import UploadedWork747 from "./components/Upload/Work/747UploadedWork";
import UploadedWorkA320 from "./components/Upload/Work/A320UploadedWork";
import UploadedWorkA380 from "./components/Upload/Work/A380UploadedWork";
import AccUploaded from "./components/AccUploaded";




function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      
      }  */}
       <Route index element={<Login/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/grid" element={<Cards/>}/>
       <Route path="/select" element={<JobWork/>}/>
       <Route path="/job" element={<JobCard/>}/>
       <Route path="/work" element={<WorkCard/>}/>\
       <Route path="/docs" element={<Document/>}/>
       <Route path="/registered" element={<AccUploaded/>}/>
       

       <Route path="/filea320" element={<FileUploadA320/>}/>
       <Route path="/filea380" element={<FileUploadA380/>}/>
       <Route path="/file747" element={<FileUpload747/>}/>
       <Route path="/aircraftupload" element={<AircraftUpload/>}/>

       <Route path="/jobaircraft" element={<JobAircraftUpload/>}/>
       <Route path="/747jobfile" element={<JobFileUpload747/>}/>
       <Route path="/a320jobfile" element={<JobFileUploadA320/>}/>
       <Route path="/a380jobfile" element={<JobFileUploadA380/>}/>
       <Route path="/747jobupload" element={<UploadedJob747/>}/>
       <Route path="/a320jobupload" element={<UploadedJobA320/>}/>
       <Route path="/a380jobupload" element={<UploadedJobA380/>}/>

       <Route path="/workaircraft" element={<WorkAircraftUpload/>}/>
       <Route path="/747workfile" element={<WorkFileUpload747/>}/>
       <Route path="/a320workfile" element={<WorkFileUploadA320/>}/>
       <Route path="/a380workfile" element={<WorkFileUploadA380/>}/>
       <Route path="/747workupload" element={<UploadedWork747/>}/>
       <Route path="/a320workupload" element={<UploadedWorkA320/>}/>
       <Route path="/a380workupload" element={<UploadedWorkA380/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;