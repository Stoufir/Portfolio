import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData'; // Assurez-vous que le chemin est correct

function Projects() {
    return (
        <div className="projects">
            <h1>Mes Projets</h1>
            <div className="category-filter">
                {/* Ajoutez ici vos filtres de catégorie si nécessaire */}
            </div>
            <div className="project-gallery">
                {projectsData.map(project => (
                    <div key={project.id} className="project-card">
                        <Link to={`/project/${project.id}`}>
                            <img className="project-image" src={project.image} alt={project.title} />
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
