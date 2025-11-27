import fitIAImage from "@/images/FitIA.png";

export const portfolioData = {
  hero: {
    name: "Jordi Rocha",
    title: "Desarrollador Full Stack",
    linkedin: "https://www.linkedin.com/in/jordi-rocha-domingo-247527374/",
    github: "https://github.com/Jorodo2006",
  },
  about: {
    paragraphs: [
      "Soy un desarrollador en formación apasionado por la tecnología, actualmente inmerso en los ciclos de Desarrollo de Aplicaciones Multiplataforma (DAM) y Desarrollo de Aplicaciones Web (DAW) de forma simultánea. Esta doble titulación me permite adquirir una visión 360º del desarrollo de software, comprendiendo la interacción desde el backend y las bases de datos hasta el frontend web y las aplicaciones nativas.",
      "Mi enfoque se centra en la resolución de problemas de forma eficiente y creativa. Disfruto tanto diseñando una API REST robusta con Spring Boot o Laravel como construyendo una interfaz de usuario intuitiva con Vue.js o desarrollando una aplicación Android nativa. La combinación de ambas titulaciones me proporciona una base sólida para adaptarme a cualquier desafío tecnológico.",
      "Además de mis habilidades técnicas, me considero una persona curiosa, autodidacta y con gran capacidad de trabajo en equipo. Siempre busco aprender nuevas tecnologías y mejorar mis conocimientos para entregar soluciones de alta calidad.",
    ],
  },
  skills: {
    // ¡AJUSTA ESTAS HABILIDADES A LAS TUYAS!
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "Vue.js", "Vuetify"],
    backend: ["Java", "Python", "PHP", "Node.js", "RESTful APIs"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Oracle SQL"],
    multiplatform: ["Java (JavaFX, Swing)", "Android (Java/Kotlin)"],
    tools: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "IntelliJ IDEA",
      "Visual Studio Code",
    ],
  },
  projects: [
    // ¡CAMBIA ESTOS PROYECTOS POR LOS TUYOS!
    {
      id: 1,
      title: "FitIA",
      description:
        "FitAI es una plataforma de juegos de fitness multijugador en tiempo real que transforma el ejercicio físico en una experiencia competitiva. Los usuarios pueden crear o unirse a salas de juego, realizar ejercicios físicos mientras son monitorizados por un modelo de aprendizaje automático (ML) en el navegador y competir contra otros jugadores en sesiones sincronizadas de 60 segundos.",
      technologies: [
        "Node.js",
        "Vuetify",
        "Vue.js",
        "MySQL",
        "AI",
        "REST API",
        "WebSockets",
      ],
      github: "https://github.com/Jorodo2006/FitIA",
      demo: "https://jordird.com/fitia",
      image: fitIAImage,
    },
  ],
  contact: {
    // ¡CAMBIA ESTO!
    email: "jordirochadomingo2006@gmail.com",
    message: "¡No dudes en contactarme para cualquier consulta o colaboración!",
  },
};
