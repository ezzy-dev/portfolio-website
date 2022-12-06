import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Projects from "../pages/projects/Projects";
import Resume from "../pages/resume/Resume";
import ProjectOne from "../pages/projects/project-one/ProjectOne";
import ProjectTwo from "../pages/projects/project-two/ProjectTwo";
import ProjectThree from "../pages/projects/project-three/ProjectThree";

function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="resume" element={<Resume />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />

      <Route path="/projects/project-one" element={<ProjectOne />} />
      <Route path="/projects/project-two" element={<ProjectTwo />} />
      <Route path="/projects/project-three" element={<ProjectThree />} />
    </Routes>
  );
}

export default AppRouter;
