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

            <div className="project-info">
                <h2>Informations du projet</h2>

                <h3>Tâches réalisées</h3>
                <ul>
                    {project.task.map((t, index) => (
                        <li key={index}>{t}</li>
                    ))}
                </ul>

                <h3>Technologies utilisées</h3>
                <ul>
                    {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>

                <h3>Problématiques et Solutions</h3>
                <div className="issues-container">
                    {project.issues.map((issue, index) => (
                        <div key={index} className="issue-card">
                            <strong>Problème :</strong> {issue.problem} <br />
                            <strong>Solution :</strong> {issue.solution}
                        </div>
                    ))}
                </div>

                <div className="project-links">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        Lien vers Github
                    </a>
                </div>
            </div>

            <button className="back-button" onClick={() => navigate('/projects')}>
                Retour à la liste des projets
            </button>
        </div>
    );
}

export default ProjectDetails;
