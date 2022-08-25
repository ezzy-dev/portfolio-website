import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

function AppRouter(): JSX.Element {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      );
}

export default AppRouter;

