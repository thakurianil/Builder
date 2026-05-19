import React, { useState, useEffect } from 'react';
import { Search, Bell, User } from 'lucide-react';
import './NavBar.css';

const NavBar = ({ category, setCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__left">
        <h1 className="nav__logo" onClick={() => setCategory('Discover')}>ESTATE</h1>
        <ul className="nav__links">
          <li onClick={() => setCategory('Discover')} style={{ fontWeight: category === 'Discover' ? 'bold' : 'normal', color: category === 'Discover' ? 'white' : '' }}>Discover</li>
          <li onClick={() => setCategory('Villas')} style={{ fontWeight: category === 'Villas' ? 'bold' : 'normal', color: category === 'Villas' ? 'white' : '' }}>Villas</li>
          <li onClick={() => setCategory('Apartments')} style={{ fontWeight: category === 'Apartments' ? 'bold' : 'normal', color: category === 'Apartments' ? 'white' : '' }}>Apartments</li>
          <li onClick={() => setCategory('Commercial')} style={{ fontWeight: category === 'Commercial' ? 'bold' : 'normal', color: category === 'Commercial' ? 'white' : '' }}>Commercial</li>
          <li onClick={() => setCategory('New Projects')} style={{ fontWeight: category === 'New Projects' ? 'bold' : 'normal', color: category === 'New Projects' ? 'white' : '' }}>New Projects</li>
        </ul>
      </div>
      <div className="nav__right">
        <Search className="nav__icon" />
        <span className="nav__child">Agents</span>
        <Bell className="nav__icon" />
        <User className="nav__icon nav__avatar" />
      </div>
    </nav>
  );
};

export default NavBar;
