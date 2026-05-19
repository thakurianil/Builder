import React from 'react';
import './Row.css';

const Row = ({ title, properties, onPropertyClick }) => {
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {properties.map((property) => (
          <img
            key={property.id}
            className="row__poster"
            src={property.image}
            alt={property.title}
            onClick={() => onPropertyClick(property)}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
