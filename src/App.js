import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import Cards from './components/Cards';




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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;