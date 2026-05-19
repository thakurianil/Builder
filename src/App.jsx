import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Row from './components/Row';
import PropertyModal from './components/PropertyModal';
import { luxuryVillas, modernApartments, commercialSpaces, newProjects } from './data/properties';

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [category, setCategory] = useState('Discover');

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="app">
      <NavBar category={category} setCategory={setCategory} />
      <Hero />

      {(category === 'Discover' || category === 'Villas') && (
        <div id="villas">
          <Row title="Luxury Villas" properties={luxuryVillas} onPropertyClick={handlePropertyClick} />
        </div>
      )}
      {(category === 'Discover' || category === 'Apartments') && (
        <div id="apartments">
          <Row title="Modern Apartments" properties={modernApartments} onPropertyClick={handlePropertyClick} />
        </div>
      )}
      {(category === 'Discover' || category === 'Commercial') && (
        <div id="commercial">
          <Row title="Commercial Spaces" properties={commercialSpaces} onPropertyClick={handlePropertyClick} />
        </div>
      )}
      {(category === 'Discover' || category === 'New Projects') && (
        <div id="new-projects">
          <Row title="New Projects" properties={newProjects} onPropertyClick={handlePropertyClick} />
        </div>
      )}

      <PropertyModal property={selectedProperty} onClose={handleCloseModal} />
    </div>
  );
}

export default App; 
