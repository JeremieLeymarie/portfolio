import './App.css';
import React, { useState, useContext } from 'react';
import { Lang } from "./LangContext";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LanguageProvider from "./Components/LanguageProvider";
import Navbar from './Components/Navbar';
import Bio from "./Components/Bio";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <LanguageProvider>
          <Navbar />
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
