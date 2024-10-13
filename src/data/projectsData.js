// src/data/projectsData.js
const projectsData = [
    {
        id: 1,
        title: 'Portfolio de Sophie Bluel',
        description: 'J\'ai travaillé en équipe sur la réalisation de ce projet.',
        image: require('../assets/SophieBluel/sophie-bluel.png'),
        carousel: [
            {
                src: require('../assets/SophieBluel/Image1.png'),
                description: 'Accueil du portfolio de Sophie Bluel'
            },
            {
                src: require('../assets/SophieBluel/Image2.png'),
                description: 'Galerie des projets de Sophie Bluel'
            },
            {
                src: require('../assets/SophieBluel/Image3.png'),
                description: 'Accès au log in du portfolio de Sophie Bluel'
            },
        ],
        liveLink: 'https://lien-vers-le-projet-1.com',
        codeLink: 'https://github.com/username/projet1',
        category: 'Front End'
    },
    
    // Ajoutez d'autres projets ici
];

export default projectsData;
