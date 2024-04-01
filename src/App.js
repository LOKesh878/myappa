import React, { useState } from 'react';
import Navbar1 from './components/Navbar1';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleEvent = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled ", "success");
      document.title = "PracPro Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled ", "success");
      document.title = "PracPro Light Mode";
    }
  }

  return (
    <>
    <Router>
      
        <Navbar1 title="PracPro" mode={mode} toggleMode={toggleEvent} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm h="Enter text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      
    </Router>
    </>
  );
}

export default App;
