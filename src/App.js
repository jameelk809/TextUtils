import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode activated", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode activated", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Alert alert={alert} />
      </div>
      <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
