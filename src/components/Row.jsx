import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Row.css';

const Row = ({ title, properties, onPropertyClick }) => {
  const rowRef = useRef(null);

  const handleScroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__container">
        <button 
          className="row__arrow row__arrow--left" 
          onClick={() => handleScroll('left')}
        >
          <ChevronLeft size={40} />
        </button>
        
        <div className="row__posters" ref={rowRef}>
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="row__poster-wrapper" 
              onClick={() => onPropertyClick(property)}
            >
              <img
                className="row__poster"
                src={property.image}
                alt={property.title}
              />
              <div className="row__poster-info">
                <h3>{property.title}</h3>
                <p>{property.price}</p>
                <button className="row__details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="row__arrow row__arrow--right" 
          onClick={() => handleScroll('right')}
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Row;
