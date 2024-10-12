import React from 'react';
import htmlIcon from '../assets/html5-original.svg'; // Assurez-vous que le chemin d'accès est correct
import cssIcon from '../assets/css3-original.svg'; // Assurez-vous que le chemin d'accès est correct
import jsIcon from '../assets/javascript-original.svg'; // Assurez-vous que le chemin d'accès est correct
import reactIcon from '../assets/react-original.svg'; // Assurez-vous que le chemin d'accès est correct

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'React', icon: reactIcon },
    ];

    return (
        <div className="skills">
            <h2>Mes Compétences</h2>
            <div className="skills-list">
                {skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                        <img src={skill.icon} alt={`${skill.name} icon`} />
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
