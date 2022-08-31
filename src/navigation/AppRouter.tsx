import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Projects from "../pages/projects/Projects";
import Resume from "../pages/resume/Resume";

function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="resume" element={<Resume />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRouter;
