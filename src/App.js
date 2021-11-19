import './App.css';
import React, { } from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LanguageProvider from "./Components/LanguageProvider";
import Navbar from './Components/Navbar';
import Bio from "./Components/Bio";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {

  function changeActiveItem(id) {
    console.log("in")
    document.getElementsByClassName("active-nav-item")[0].classList.remove("active-nav-item");
    document.getElementById(id).classList.add("active-nav-item");
  }

  return (
    <div className="App">
      <Router>
        <LanguageProvider>
          <Navbar click={changeActiveItem}/>
          <Routes>
            <Route path="/bio" element={<Bio />} />
            <Route path="/" element={<Bio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </LanguageProvider>
      </Router>
    </div>
  );
}

export default App;
