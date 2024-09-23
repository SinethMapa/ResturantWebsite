// src/components/Hero.js
import React from 'react';
// import './Hero.css'; ()

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Enjoy Our Food Experience</h1>
        <p>We don't just make food. We make people's experience. DOMEKI was built on the belief that food should be special, and we carry that belief into everything we do.</p>
        <button className="menu-button">View our menu</button>
      </div>
      {}
      <img className="hero-image" src={`${process.env.PUBLIC_URL}/images/hero.jpg.png`} alt="Food Platter" />
    </section>
  );
};

export default Hero;