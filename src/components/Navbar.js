import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour fermer le menu mobile lors du clic sur un lien
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          <img className='tecjweb' />
        </a>

        {/* Menu hamburger pour mobile */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu de navigation */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#hero" onClick={handleLinkClick}>Accueil</a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={handleLinkClick}>À propos</a>
          </li>
          <li className="nav-item">
            <a href="#skills" onClick={handleLinkClick}>Compétences</a>
          </li>
          <li className="nav-item">
            <a href="#projects" onClick={handleLinkClick}>Projets</a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={handleLinkClick}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 