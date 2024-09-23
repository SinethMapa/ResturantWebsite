// src/components/OurStory.js
import React from 'react';

const OurStory = () => {
  return (
    <section className="our-story">
      <h2>Welcome to DOMEKI</h2>
      <p>
        Chef Mapa and Executive Chef Sineth have teamed up to open one of the most exciting restaurants in Hamamatsu. 
        Our specialty is delicious cuisine created with the ingenuity and passion inspired by the rich flavors of Japan. 
        We take great pride in enhancing your favorite Japanese dishes with new and creative twists, bringing a unique fusion 
        of culinary traditions to life.
      </p>
      <div className="story-images">
        {}
        <img src={`${process.env.PUBLIC_URL}/images/Japanese_Cooking_Scene.png`} alt="Interior of the restaurant" />
        <img src={`${process.env.PUBLIC_URL}/images/story-1.png.png`} alt="Chef preparing food" />
      </div>
    </section>
  );
};

export default OurStory;
