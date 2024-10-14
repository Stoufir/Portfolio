import React from 'react';
import htmlIcon from '../assets/html5-original.svg'; // Chemin relatif correct après build
import cssIcon from '../assets/css3-original.svg';
import jsIcon from '../assets/javascript-original.svg';
import reactIcon from '../assets/react-original.svg';
import mongoIcon from '../assets/mongodb-icon-1.svg'
import nodeIcon from '../assets/node-js.svg'


const Skills = () => {
    const skills = [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'React', icon: reactIcon },
        { name: 'Node.js', icon: nodeIcon},
        { name: 'MongoDB', icon: mongoIcon},
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
