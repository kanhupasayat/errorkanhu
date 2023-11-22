import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Removed useNavigate import
import Navbar from "./Kanhu/Navbar";
import Home from "./Kanhu/Home";
import About from "./Kanhu/About";
import Project from "./Kanhu/Project";
import Footer  from "./Kanhu/Footer";

function App() {
  useEffect(() => {
    window.scrollTo(0,210);
  });

  return (
    <>
      <Router>
        <main>
          <Navbar />
          <home />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
          </Routes>
          <Footer/>
        </main>
      </Router>
      
    </>
  );
}

export default App;
