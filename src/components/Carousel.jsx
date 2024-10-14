import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import projectsData from '../data/projectsData';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ProjectsCarousel({ projectId }) {
    // Recherche le projet par son ID
    const project = projectsData.find(p => p.id === projectId);

    // Si le projet n'existe pas, afficher un message ou rien
    if (!project || !project.carousel) {
        return <div>Aucun carrousel disponible pour ce projet.</div>;
    }

    return (
        <div className="carousel-container">
            <Carousel
                showThumbs={false} // Ne pas afficher les miniatures
                showIndicators={false} // Ne pas afficher les indicateurs
                showStatus={false} // Ne pas afficher le statut
                infiniteLoop // Permet de boucler le carrousel
                useKeyboardArrows // Utilisation des flèches du clavier
                autoPlay // Lancer le carrousel automatiquement
                interval={4000} // Intervalle entre les images
                className="carousel" // Ajouter une classe pour le style
            >
                {project.carousel.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={`Carrousel ${index + 1}`} />
                        <p className="carousel-description">{image.description}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default ProjectsCarousel;
