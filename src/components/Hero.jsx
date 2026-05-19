import React from 'react';
import { Play, Info } from 'lucide-react';
import { heroProperty } from '../data/properties';
import './Hero.css';

const Hero = () => {
  return (
    <header 
      className="hero"
      style={{
        backgroundImage: `url("${heroProperty.backdrop}")`,
      }}
    >
      <div className="hero__contents">
        <h1 className="hero__title">{heroProperty.title}</h1>
        <p className="hero__description">{heroProperty.description}</p>
        <div className="hero__buttons">
          <button className="hero__button hero__button--play">
            <Play className="hero__button-icon" fill="black" /> View Details
          </button>
          <button className="hero__button hero__button--info">
            <Info className="hero__button-icon" /> Contact Agent
          </button>
        </div>
      </div>
      <div className="hero--fadeBottom"></div>
    </header>
  );
};

export default Hero;
