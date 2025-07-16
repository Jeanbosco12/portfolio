import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>REMIFAHATSE Jean Bosco</h3>
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
            <li>remifahatsebosco@gmail.com</li>
            <li><a href='https://linkedin.com/in/remifahatsejeanbosco' target='_blank' rel="noopener noreferrer"> <FaLinkedin /> </a></li>
            <li><a href='https://github.com/JeanBosco12Jr' target='_blank' rel="noopener noreferrer"> <FaGithub /> </a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Suivez-moi</h3>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {year} Bosco. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
