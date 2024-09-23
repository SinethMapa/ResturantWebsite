// src/App.js
import React from 'react';
import Hero from './components/Hero'; 
import OurStory from './components/OurStory';
import Menu from './components/Menu'; 
import Booking from './components/Booking'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <OurStory />
      <Menu />
      <Booking />
    </div>
  );
}

export default App;
