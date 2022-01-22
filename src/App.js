import './App.css';
import React, { useState } from 'react'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About';
// import { Routes, Route, Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light') ;// ye state dark mode ka bataee ghii 
  
  const [alert, setAlert] = useState (null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500)
  }
  
  // console.log(alert);

  const darkMode = ()=>{
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor= "grey"
      document.body.style.fontFamily= "arial"
      showAlert("Dark mode been has been Enabled","success");
      document.title="Text Editor -- Dark";

      setInterval(() =>{
      document.title="Text Editor its Amazing";
      },2000)
      
      setInterval(() =>{
        document.title="Text Editor Made For Salman";
        },1500)

    }else{
      setMode('light');
      document.body.style.backgroundColor= "white"
      document.body.style.fontFamily= "arial"
      showAlert("Light mode been has been Enabled","success");
      document.title="Text Editor -- Light";
    }
  }
  return (
    <div>
      
      <Navbar title="Texteditor" aboutus="About " mode={mode} darkMode={darkMode}/>
      <Alert alert={alert}/>

      <div className='container my-3'>
        <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />} />
            {/* <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/> */}
            <Route path="about" element={<About />} />
        </Routes>
      </div>
     
    </div>
  );
}

export default App;
