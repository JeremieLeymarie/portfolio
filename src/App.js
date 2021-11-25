import './App.css';
import './responsive.css';
import React, { useEffect} from 'react';
import { Route, Routes, BrowserRouter as Router, HashRouter } from "react-router-dom";
import LanguageProvider from "./Components/LanguageProvider";
import Navbar from './Components/Navbar';
import Bio from "./Components/Bio";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  useEffect(()=>{
    document.title = "Jérémie Leymarie - Full Stack Developer";
  }, []);
  function changeActiveItem(id) {
    if (document.getElementsByClassName("active-nav-item").length > 0){
      document.getElementsByClassName("active-nav-item")[0].classList.remove("active-nav-item");
    }

    document.getElementById(id).classList.add("active-nav-item");
  }

  return (
    <div className="App">
      <HashRouter basename="/">
        <LanguageProvider>
          <Navbar click={changeActiveItem} />
          <Routes>
            <Route path="/bio" element={<Bio click={changeActiveItem} />} />
            <Route path="/" element={<Bio click={changeActiveItem} />} />
            <Route path="/projects" element={<Projects click={changeActiveItem} />} />
            <Route path="/contact" element={<Contact click={changeActiveItem} />} />
          </Routes>
        </LanguageProvider>
      </HashRouter>
    </div>
  );
}

export default App;
