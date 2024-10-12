import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { id } = useParams(); // Récupération de l'ID

    return (
        <div className="project-detail">
            <h1>Détails du Projet</h1>
            <p>ID du projet : {id}</p> {/* Affiche l'ID */}
        </div>
    );
};

export default ProjectDetail;
