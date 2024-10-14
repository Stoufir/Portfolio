import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <NavLink to="/" className="footer-link">Accueil</NavLink>
          <NavLink to="/projects" className="footer-link">Projets</NavLink>
          <NavLink to="/contact" className="footer-link">Contact</NavLink>
        </nav>
        
        <div className="contact-info">
          <div className="social-links">
            <a href="https://github.com/stoufir" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Salim. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
