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
import Aircraft from "./components/Aircraft";
import FileUpload from "./components/FileUpload";
import { Upload } from "@mui/icons-material";
import Uploaded from "./components/Uploaded";




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
       <Route path="/aircraft" element={<Aircraft/>}/>
       <Route path="/file" element={<FileUpload/>}/>
       <Route path="/uploaded" element={<Uploaded/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;