import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import JobWork from "./components/JobWork";
import JobCard from "./components/JobCard";
import WorkCard from "./components/WorkCard";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
import JobAircraftEdit from "./components/Edit/Job/JobAircraftEdit";
import A320JobEdit from "./components/Edit/Job/A320JobEdit";
import A380JobEdit from "./components/Edit/Job/A380JobEdit";
import JobEdit747 from "./components/Edit/Job/747JobEdit";
import WorkAircraftEdit from "./components/Edit/Work/WorkAircraftEdit";
import A320WorkEdit from "./components/Edit/Work/A320WorkEdit";
import A380WorkEdit from "./components/Edit/Work/A380WorkEdit";
import WorkEdit747 from "./components/Edit/Work/747WorkEdit";
import A380JobView from "./components/View/Job/A380JobView";
import A320JobView from "./components/View/Job/A320JobView";
import JobAircraftView from "./components/View/Job/JobAircraftView";
import JobView747 from "./components/View/Job/747JobView";
import WorkAircraftView from "./components/View/Work/WorkAircraftView";
import A320WorkView from "./components/View/Work/A320WorkView";
import A380WorkView from "./components/View/Work/A380WorkView";
import WorkView747 from "./components/View/Work/747WorkView";
import Chat from "./Chat"


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
       <Route index element={<Login/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/select" element={<JobWork/>}/>
       <Route path="/job" element={<JobCard/>}/>
       <Route path="/work" element={<WorkCard/>}/>\
       <Route path="/registered" element={<AccUploaded/>}/>

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

       <Route path="/jobeditaircraft" element={<JobAircraftEdit/>}/>
       <Route path="/a320jobedit" element={<A320JobEdit/>}/>
       <Route path="/a380jobedit" element={<A380JobEdit/>}/>
       <Route path="/747jobedit" element={<JobEdit747/>}/>

       <Route path="/workeditaircraft" element={<WorkAircraftEdit/>}/>
       <Route path="/a320workedit" element={<A320WorkEdit/>}/>
       <Route path="/a380workedit" element={<A380WorkEdit/>}/>
       <Route path="/747workedit" element={<WorkEdit747/>}/>

       <Route path="/jobviewaircraft" element={<JobAircraftView/>}/>
       <Route path="/a320jobview" element={<A320JobView/>}/>
       <Route path="/a380jobview" element={<A380JobView/>}/>
       <Route path="/747jobview" element={<JobView747/>}/>

       <Route path="/workviewaircraft" element={<WorkAircraftView/>}/>
       <Route path="/a320workview" element={<A320WorkView/>}/>
       <Route path="/a380workview" element={<A380WorkView/>}/>
       <Route path="/747workview" element={<WorkView747/>}/>
       <Route path="/chat" element={<Chat/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;