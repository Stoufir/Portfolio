import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData';
import NotFound from '../pages/NotFound'; 
import ProjectsCarousel from '../components/Carousel'; 

function ProjectDetails() {
    const { id } = useParams(); // Récupère l'ID du projet depuis l'URL
    const navigate = useNavigate();

    // Trouver le projet correspondant à l'ID
    const project = projectsData.find(p => p.id === parseInt(id, 10));

    // Vérifiez si le projet existe
    if (!project) {
        
        return <NotFound />; // Affiche le composant NotFound si le projet n'existe pas
    }

    return (
        <div className="project-details">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <ProjectsCarousel projectId={project.id} />
        </div>
    );
}

export default ProjectDetails;
