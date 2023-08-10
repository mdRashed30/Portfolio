import React from "react";
import { Routes, Route } from "react-router-dom"; // Make sure to import Routes and Route
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About"; // Import the About component
import Project from "./routes/Project"; // Import the Project component
import Contact from "./routes/Contact";
import Resume from "./routes/Resume"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
