import React from 'react';
import { NavLink } from 'react-router-dom';
import Skills from './Skills'

const HomeInfo = () => {
  return (
    <div className="home-info-container">
      {/* Section de présentation */}
      <section className="hero">
        <h1>Salut, je suis Salim, développeur web passionné !</h1>
        <p>Je crée des applications web modernes avec React, Node.js, et MongoDB, alliant performance et simplicité.</p>
        <NavLink to="/projects" className="cta-button">
          Découvrez mes projets
        </NavLink>
      </section>

      {/* Section rapide "À propos" */}
      <section className="about-quick">
        <h2>À propos de moi</h2>
        <p>Je suis un développeur web avec une expérience solide dans la création de solutions complètes, allant du design d’interface à la mise en place de back-end. Ma priorité est de concevoir des sites et des applications qui résolvent des problèmes réels tout en offrant une expérience utilisateur fluide.</p>
      </section>

      {/* Section compétences */}
      <section className="skills">
        <Skills/>
      </section>


      {/* Section Call-to-Action (contact) */}
      <section className="cta-contact">
        <h2>Intéressé par une collaboration ?</h2>
        <p>Discutons de votre projet !</p>
        <NavLink to="/contact" className="cta-button">
          Contactez-moi
        </NavLink>
      </section>
    </div>
  );
};

export default HomeInfo;
