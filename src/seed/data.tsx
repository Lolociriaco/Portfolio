import { BookText, CodeSquare, HomeIcon, UserRound } from "lucide-react";
import { JSX } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoLogoGithub, IoMdMail } from "react-icons/io";

export interface Tech {
    tech: string;
    icon: JSX.Element;
}

//CREADO APARTE, SE PUEDE BORRAR DESPUES

export const presentationData = [
    {
        saludo: "Hola! Yo soy",
        descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum nostrum esse placeat impedit voluptate accusamus eos nihil! Similique architecto nostrum vero dolorum quis quas odit nisi ut quod asperiores"
    },
    {
        saludo: "Hi! I'am",
        descripcion: "Advanced student of Programming and Teaching Assistant in C++ Programming at the National Technological University (UTN)."
    }
]


export const cardData = [
    {
        img: "/images/Portada-PlantasVsZombies.png",
        title: "Plantas vs Profes",
        description: "Plantas vs Profes is a Tower Defense video game where you must defend your university from a horde of furious professors and administrators.",
        items: [
          "📺 Intuitive menu with a record system.",
          "⚔️ Progressive levels with increasing difficulty.",
          "🪴 Different plants with special abilities.",
          "🎵 Music and sound effects.",
        ],
        link: "https://github.com/Lolociriaco/PlantasVsProfes",
        alt: "Start menu image",
        technologies: [
            {
                tech: "C++",
                icon: <img src="/icons/cplusplus.png" alt="C++" style={{ width: "20px" }} />,
            },
            {
                tech: "SFML",
                icon: <img src="/icons/sfml.png" alt="SFML" style={{ width: "20px" }} />,
            },
        ] as Tech[]
    },
    {
        img: "/images/Portada-pagina-cabañas.png",
        title: "Cabañas Inti Mayu",
        description: "Fully responsive website created for a cabin resort, offering visitors a seamless experience to:",
        items: [
          "🏡 Explore detailed information about the cabins.",
          "📖 Learn about the history of the place.",
          "🛎️ Make cabin reservations quickly and easily.",
          "📍 View the distance to nearby beaches with a single click.",
        ],
        link: "https://github.com/Lolociriaco/INTI_MAYU",
        alt: "Cabains Inti Mayu homepage",
        technologies:[
            {
                tech: "HTML",
                icon: <img src="/icons/html.png" alt="HTML" style={{ width: "20px" }} />,
            },
            {
                tech: "CSS",
                icon: <img src="/icons/css.png" alt="CSS" style={{ width: "20px" }} />,
            },
            {
                tech: "JavaScript",
                icon: <img src="/icons/js.png" alt="JavaScript" style={{ width: "18px" }} />,
            },
        ] as Tech[]

    },
    {
        img: "/images/Portada-batalla-naval.png",
        title: "Batalla Naval",
        description: "Developed as a college project, this console-based Battleship game offers 1v1 gameplay, dynamic colors, a scoring system, and a user-friendly terminal interface.",
        items: [
          "🚢 Classic 1v1 Battleship gameplay.",
          "🏆 Scoring system to track victories.",
          "⌨️ Clean and engaging interface using rlutil."
        ],
        link: "https://github.com/Lolociriaco/JUEGO-BATALLA-NAVAL",
        alt: "Screnshot of the game",
        technologies: [
            {
                tech: "C++",
                icon: <img src="/icons/cplusplus.png" alt="C++" style={{ width: "20px" }} />,
            },
        ] as Tech[]

    },
]


export const tecnologiesData = [
    {
        icon: <img src="/icons/html.png" alt="HTML" style={{ width: "56px" }} />,
        bg_color: "bg-orange-500"
    },
    {
        icon: <img src="/icons/css.png" alt="CSS" style={{ width: "56px" }} />,
        bg_color: "bg-blue-500"
    },
    {
        icon: <img src="/icons/js.png" alt="JavaScript" style={{ width: "56px" }} />,
        bg_color: "bg-yellow-400"
    },
    {
        icon: <img src="/icons/typescript.png" alt="TypeScript" style={{ width: "56px" }} />,
        bg_color: "bg-blue-600"
    },
    {
        icon: <img src="/icons/react.png" alt="React" style={{ width: "56px" }} />,
        bg_color: "bg-cyan-400"
    },
    {
        icon: <img src="/icons/next.js.png" alt="Next.js" style={{ width: "56px" }} />,
        bg_color: "bg-neutral-200"
    },
    {
        icon: <img src="/icons/tailwind.png" alt="Tailwind" style={{ width: "56px" }} />,
        bg_color: "bg-sky-400"
    },
    {
        icon: <img src="/icons/cplusplus.png" alt="C++" style={{ width: "56px" }} />,
        bg_color: "bg-blue-800"
    },
    {
        icon: <img src="/icons/csharp.png" alt="C#" style={{ width: "56px" }} />,
        bg_color: "bg-fuchsia-800"
    },
    {
        icon: <img src="/icons/sql-server.png" alt="SQL Server" style={{ width: "56px" }} />,
        bg_color: "bg-rose-600"
    },
    {
        icon: <img src="/icons/git.png" alt="Git" style={{ width: "56px" }} />,
        bg_color: "bg-orange-600"
    }
]

export const academicData = [
    {
        title: "Technical Degree in Programming",
        description: "Focused on developing technical skills, soft skills, and practical knowledge to work independently or in teams in software programming and IT systems.",
        institution: "UTN FRGP",
        inProgress: true,
    },
    {
        title: "Next.js for Production: SSR, Middleware, APIs & More",
        description: "Build production-ready applications with Next.js using SSR, dynamic routes, middleware, authentication, cookies, and multi-platform deployment through practical, real-world examples.",
        institution: "Udemy",
        inProgress: false,
    },
    {
        title: "React Mastery: Hooks, Router, Redux, and More",
        description: "Modern React development using Hooks, React Router, Context, Redux, Testing, and best practices — all reinforced through hands-on projects.",
        institution: "Udemy",
        inProgress: false,
    },
    
    
]


export const contactData = [
    {
        platform: "Phone",
        icon: <FiPhone  size={30} />,
        data: "+54 11 3061-2259",
        src: null
    },
    {
        platform: "Email",
        icon: <IoMdMail size={30} />,
        data: "ciriacolorenzo5@gmail.com",
        src: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ciriacolorenzo5@gmail.com"
    },
    {
        platform: "Linkedin",
        icon: <FaLinkedin size={30} />,
        data: "Lorenzo Ciriaco",
        src: "https://www.linkedin.com/in/lorenzo-ciriaco-0a69161b7/"
    },
    {
        platform: "Github",
        icon: <IoLogoGithub size={30} />,
        data: "Lorenzo Ciriaco",
        src: "https://github.com/Lolociriaco"
    },
    {
        platform: "Location",
        icon: <GrLocation size={30} />,
        data: "Buenos Aires, Argentina",
        src: ""
    },
]


export const socialNetworks = [
    {
        id: 1,
        logo: <FaLinkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/lorenzo-ciriaco-0a69161b7/",
    },
    {
        id: 2,
        logo: <IoLogoGithub size={30} strokeWidth={1} />,
        src: "https://github.com/Lolociriaco",
    },
    {
        id: 3,
        logo: <IoMdMail size={30} strokeWidth={1} />,
        src: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ciriacolorenzo5@gmail.com",
    },

];


export const itemsNavbar = [
    {
        title: "Home",
        icon: <HomeIcon size={25} strokeWidth={1} />,
        link: "home",
    },
    {
        title: "Proyects",
        icon: <BookText size={25} strokeWidth={1} />,
        link: "proyects",
    },
    {
        title: "Expirience",
        icon: <CodeSquare size={25} strokeWidth={1} />,
        link: "expirience",
    },
    {
        title: "About me",
        icon: <UserRound size={25} strokeWidth={1} />,
        link: "about-me",
    },
    {
        title: "Contact",
        icon: <CodeSquare size={25} strokeWidth={1} />,
        link: "contact",
    },
];


export const aboutMeData = [
    {
        description: "Passionate about technology and software development, with a strong foundation in both frontend and backend tools. Skilled in C++, Git, Microsoft SQL Server, and modern web technologies such as React, Next.js, Tailwind CSS, and JavaScript. Currently advancing my studies in Programming and Information Systems, while working as a Teaching Assistant in C++ Programming at the National Technological University (UTN). Always eager to learn, build, and grow.",
        image: "/images/Lorenzo-Ciriaco.jpg",
    }
]
