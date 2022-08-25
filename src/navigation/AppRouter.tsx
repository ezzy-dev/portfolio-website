import React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default AppRouter;