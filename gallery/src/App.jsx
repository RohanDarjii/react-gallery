import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import Errorpage from './components/Errorpage';
import {
  Routes,
  Route
} from 'react-router-dom';
const App = () => {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
};

export default App;