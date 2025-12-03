export const resumeDatas = {
    presentation : {
        title: 'Présentation',
        cards: [
            {
                icon: 'LaptopMinimalCheck',
                title: 'Développement Web Full-Stack',
                description: "Développement d'applications Web, aussi bien côté client que côté serveur : SAAS, CMS, paiements et abonnements, visualisation de données, temps réel",
            },
            {
                icon: 'Box',
                title: '3D',
                description: "Intégration de 3D dans vos applications Web. De la création de modèles 3D à leur intégration dans votre application.",
            },
            {
                icon: 'LampDesk',
                title: 'Conseil et Débugging',
                description: "Débugging de votre application en production, optimisation des performances, monitoring, accessibilité, sécurité, et réduction des coûts d'hébergement.",
            }
        ]
    },
    experiences : {
        title: 'Expériences',
        cards: [
            {
                title: 'Développeur Full-Stack',
                company: 'Galadrim',
                year: '2023-2025',
                description: "Développement d'applications web et logiciels pour différents clients, de la création autonome de projets entiers à l'intégration d'équipes sur de larges codebases.",
                clients: [
                    {
                        name: 'CNRS (Centre National de la Recherche Scientifique)',
                        description: "Développement d'un logiciel de computer vision permettant de traquer des trajectoires à partir de vidéos d'écriture puis de les visualiser et analyser en 3D pour l'étude des techniques d'écriture à l'époque médiévale.",
                        technologies: ['C++', 'Qt', 'OpenCV']
                    },
                    {
                        name: 'DirectSkills',
                        description: "SAAS - Monopole de la gestion de l'intérim des grands groupes (2M de contrats / an). Participation à la migration Strangler Fig et à l'amélioration de différents services de l'application. Approche TDD / DDD.",
                        technologies: ['Typescript', 'React', 'Remix', 'GraphQl']
                    },
                    {
                        name: 'Project x Paris',
                        description: "SAAS - Prêt à porter - Amélioration et maintenance des logiciels de caisse et logistique (gestion des stocks, commandes, prix, statistiques et ressources humaines) - Modernisation de la stack technique (JS → TS, Pug → React)",
                        technologies: ['React', 'Express,js', 'jQuery', 'Pug', 'MySQL', 'AWS']
                    },
                    {
                        name: 'splitter.fr',
                        link: 'https://splitter.fr',
                        description: "Développement d'une plateforme permettant d'investir de façon fractionnée sur un bien immobilier puis de recevoir une fraction de ses revenus générés mensuellement.",
                        technologies: ['Next.js', 'Postgres', 'Lemonway', 'AWS']
                    },
                ],
                footer: {
                    name: 'Autres',
                    description: 'Participation aux entretiens techniques & interventions ponctuelles de maintenance/ajout de features sur différents projets',
                    technologies: ['Typescript', 'Nest.js', 'Golang']
                }
            },
            {
                title: 'Développeur Full-Stack',
                company: 'Freelance',
                year: '2025',
                clients: [
                    {
                        name: 'Lueur studio',
                        description: "Développement d'un site immersif et intéractif pour une association d'événementiel",
                        technologies: ['React', 'Three.js']
                    }
                ]
            },
            {
                title:'Doctorant en électionique',
                company: "IMS (Laboratoire de l'Intégation du matériau au système)",
                year: '2020-2022',
                description: "Sujet de thèse : “Dopage de polymères conjugués pour l'amélioration de l'efficacité et la stabilité des cellules photovoltaïques organiques”  Conférence donnée en anglais (ESEMA 2022)  Article publié : [Feaugas F. et al. (2022). Homojunction Doping for Efficient Hole Extraction in Polymer Solar Cells. Solar RRL]",
                link: 'https://hal.science/hal-04235875v1/document'
            }

        ]
    },
    projects : {
        title: 'Projets',
        cards: [
            {
                title: 'Project-Manager',
                description: 'Alternative minimaliste à Notion pour la gestion de tâches, projects créatifs et prises de notes',
                year: '2025',
                technologies: ['Next.js', 'Postgres', 'Vercel'],
                link: 'https://project-manager.franci.dev',
            },
            {
                title: 'WebGl Engine',
                description: "Moteur 3D bas niveau prenant en compte le rendu des scènes avec mouvements, objets, textures, lumières",
                year: '2025',
                technologies: ['Typescript', 'WebGL'],
            },
            {
                title: 'Vainqueur Hackaton Zenmon Drops',
                description: "Première place lors d'un hackathon organisé par Zenmon Drops visant à réaliser un Chatbot orienté neuronsciences",
                year: '2023',
                technologies: ['PHP', 'Wordpress', 'Javascript'],
            }
        ]
    },
    formation : {
        title: 'Formation',
        cards: [
            {
                title: '42',
                description: "Programmation bas niveau : Création d'un shell, d'un jeu en Ray casting - Programmation orientée objet / multithreads - Serveur de communication IRC - Administration système - Projet full-stack Web : Jeu en ligne avec chat en temps réel, authentification, statistiques",
                year: '2022',
                technologies: ['C', 'C++', 'Typescript', 'Docker', 'Nest.js', 'Next.js', 'PostgreSQL'],            
            },
            {
                title: 'Ingénieur matériaux et nanotechnologies',
                description: "Prépa PCSI/PC * puis École européenne de Chimie, Polymères et Matériaux, spécialisation science des matériaux, nanosciences et simulations numériques",
                year: '2015-2020',
                technologies: ['Python', 'VBA'],
            },
        ]
    },
}