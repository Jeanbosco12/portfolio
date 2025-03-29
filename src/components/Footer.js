import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Bosco</h3>
          <p>Développeur Web Full Stack passionné par la création d'expériences web modernes et performantes.</p>
        </div>
        
        <div className="footer-section">
          <h3>Liens Rapides</h3>
          <ul>
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: votre.email@example.com</li>
            <li>LinkedIn: linkedin.com/in/votre-profil</li>
            <li>GitHub: github.com/votre-profil</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Suivez-moi</h3>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Bosco. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
