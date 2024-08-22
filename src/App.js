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
       <Route path="/work" element={<WorkCard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;