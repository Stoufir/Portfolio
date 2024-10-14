// src/data/projectsData.js
const projectsData = [
    {
        id: 1,
        title: 'Portfolio de Sophie Bluel',
        description: 'Ce projet m\'a engagé à créer une page web dynamique pour le site internet d\'une architecte d\'intérieur. J\'ai travaillé sur la partie Front-End du site, où j\'ai développé la page de présentation des travaux, la page de connexion, ainsi qu\'une modale permettant d\'uploader de nouveaux médias.',
        image: require('../assets/SophieBluel/sophie-bluel.png'),
        carousel: [
            {
                src: require('../assets/SophieBluel/Image1.png'),
                description: 'Accueil du portfolio de Sophie Bluel.'
            },
            {
                src: require('../assets/SophieBluel/Image2.png'),
                description: 'Galerie des projets de Sophie Bluel.'
            },
            {
                src: require('../assets/SophieBluel/Image3.png'),
                description: 'Accès à la page de connexion du portfolio de Sophie Bluel.'
            },
        ],
        codeLink: 'https://github.com/Stoufir/Sophie-Bluel-Portfolio',
        category: 'Front End',
        task: [
            "Réaliser la page de présentation des travaux de l'architecte.",
            "Développer la page de connexion de l'administrateur du site.",
            "Créer la modale permettant d'uploader de nouveaux médias."
        ],
        technologies: ['HTML', 'CSS', 'Javascript'],
        issues: [
            {
                problem: "Afficher tout les travaux de l'architecte.",
                solution: "Utilisation de l'API pour récupérer dynamiquement les travaux."
            },
        ]
    },
    {
        id: 2,
        title: 'Application Kasa',
        description: "Au travers de ce projet j'ai implémenté le front-end d'une application en utilisant React et React Router. Cela ma permis de créer une expérience utilisateur moderne et réactive.",
        image: require('../assets/Kasa/Kasa.png'),
        carousel: [
            {
                src: require('../assets/Kasa/image1.png'),
                description: 'Accueil de l\'application Kasa.'
            },
            {
                src: require('../assets/Kasa/image2.png'),
                description: 'Page À propos de Kasa avec des éléments animés.'
            },
            {
                src: require('../assets/Kasa/image3.png'),
                description: 'Page générée par ID d\'un logement avec un carrousel.'
            },
        ],
        codeLink: 'https://github.com/Stoufir/Kasa',
        category: 'Front End',
        task: [
            "Mise en place d'une navigation grâce à React Router.",
            "Création des différentes pages grâce aux composants React.",
            "Création d'un carrousel en Javascript."
        ],
        technologies: ['HTML', 'SASS', 'Javascript', 'React'],
        issues: [
            {
                problem: "Naviguer dans les différentes pages de l'application était peu intuitif.",
                solution: "Utilisation de React Router pour une navigation fluide entre les pages."
            },
            {
                problem: "Difficulté à présenter les informations d'un logement de manière dynamique.",
                solution: "Navigation par ID afin d'afficher les informations de chaque logement de manière dynamique."
            }
        ]
    },
    {
        id: 3,
        title: 'Mon Vieux Grimoire',
        description: "Ce projet ma permis de développer le back-end d'un site de notation de livres. J'ai pu découvrir comment créer un serveur avec Express et comment le connecter avec une base de données MongoDB.",
        image: require('../assets/MonVieuxGrimoire/Logo.png'),
        carousel: [
            {
                src: require('../assets/MonVieuxGrimoire/image1.png'),
                description: 'Accueil du site Mon Vieux Grimoire.'
            },
            {
                src: require('../assets/MonVieuxGrimoire/image2.png'),
                description: 'Page de d\'inscription/de connexion.'
            },
            {
                src: require('../assets/MonVieuxGrimoire/image3.png'),
                description: 'Page pour publier des livres.'
            },
        ],
        codeLink: 'https://github.com/Stoufir/Mon-vieux-grimoire',
        category: 'Back End',
        task: [
            "Mise en place d'un serveur Express simple.",
            "Création d'une API RESTful.",
            "Mise en place d'un système d'authentification sur l'application."
        ],
        technologies: ['Node.js', 'Express', 'Javascript', 'React'],
        issues: [
            {
                problem: "La sécurité des données utilisateur, en particulier lors de la gestion des mots de passe et des notations, était insuffisante.",
                solution: "Utilisation de la bibliothèque Bcrypt pour hacher les mots de passe et validation des entrées utilisateur avec express-validator."
            },
            {
                problem: "Le téléchargement et la gestion des images étaient inefficaces, entraînant des problèmes de performance.",
                solution: "Utilisation de Multer pour gérer les téléchargements d'images et de Sharp pour optimiser et redimensionner les images avant le stockage."
            }
        ]
    },
    
    // Ajoutez d'autres projets ici
];

export default projectsData;
