import { BookText, CodeSquare, HomeIcon, UserRound } from "lucide-react";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaLinkedin, FaReact } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoLogoGithub, IoMdMail } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiCashapp, SiCplusplus } from "react-icons/si";

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
        title: "Plantas vs Zombies",
        description: "Esta es la descripcion del juego lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum nostrum esse placeat impedit voluptate accusamus eos nihil! Similique architecto nostrum vero dolorum quis quas odit nisi ut quod asperiores lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum nostrum esse placeat impedit voluptate accusamus eos nihil! Similique architecto nostrum vero dolorum quis quas odit nisi ut quod asperiores",
        link: "link para ver el repo",
        secondLink: "link para ver el repo",
        alt: "explicacion",
        tecnologies: ["HTML", "CSS", "JS"]
    },
    {
        img: "/images/Portada-pagina-cabañas.png",
        title: "Cabañas Inty Mayu",
        description: "Esta es la descripcion del juego",
        link: "link para ver el repo",
        secondLink: "link para ver el repo",
        alt: "explicacion",
        tecnologies: ["HTML", "CSS", "JS"]

    },
    {
        img: "/images/Portada-pagina-cabañas.png",
        title: "Cabañas Inty Mayu4",
        description: "Esta es la descripcion del juego",
        link: "link para ver el repo",
        secondLink: "link para ver el repo",
        alt: "explicacion",
        tecnologies: ["HTML", "CSS", "JS"]

    },
    {
        img: "/images/Portada-pagina-cabañas.png",
        title: "Cabañas Inty Mayu3",
        description: "Esta es la descripcion del juego",
        link: "link para ver el repo",
        secondLink: "link para ver el repo",
        alt: "explicacion",
        tecnologies: ["HTML", "CSS", "JS"]

    },
    {
        img: "/images/Portada-pagina-cabañas.png",
        title: "Cabañas Inty Mayu2",
        description: "Esta es la descripcion del juego",
        link: "link para ver el repo",
        secondLink: "link para ver el repo",
        alt: "explicacion",
        tecnologies: ["HTML", "CSS", "JS"]

    },
    {
        img: "/images/Portada-pagina-cabañas.png",
        title: "Cabañas Inty Mayu1",
        description: "Esta es la descripcion del juego",
        link: "link para ver el repo",
        secondLink: "link para ver el repo",
        alt: "explicacion",
        tecnologies: ["HTML", "CSS", "JS"]

    },
]


export const tecnologiesData = [
    {
        icon: <FaHtml5 size={50}/>,
        name: "HTML"
    },
    {
        icon: <FaCss3Alt size={50}/>,
        name: "CSS"
    },
    {
        icon: <FaSquareJs size={50}/>,
        name: "JavaScript"
    },
    {
        icon: <FaReact size={50}/>,
        name: "React"
    },
    {
        icon: <RiNextjsFill size={50}/>,
        name: "Next.Js"
    },
    {
        icon: <BiLogoTypescript size={50}/>,
        name: "TypeScript"
    },
    {
        icon: <RiTailwindCssFill size={50}/>,
        name: "Tailwind"
    },
    {
        icon: <SiCplusplus size={50}/>,
        name: "C++"
    },
    {
        icon: <img src="/images/c-sharp.png" alt="C#" style={{width:"56px"}} />,
        name: "C#"
    },
    {
        icon: <DiMsqlServer size={50}/>,
        name: "SQL Server"
    },
    {
        icon: <FaGitAlt size={50}/>,
        name: "Git"
    },
]

export const academicData = [
    {
        id: 1,
        title: "Technical Degree in Programming",
        description: "En esta carrera, aprenderás a crear aplicaciones web interactivas y funcionales utilizando tecnologías modernas como HTML, CSS, JavaScript y frameworks populares.",
        institution: "UTN FRGP",
        inProgress: true,
    },
    {
        id: 2,
        title: "Technical Degree in Programming",
        description: "En esta carrera, aprenderás a crear aplicaciones web interactivas y funcionales utilizando tecnologías modernas como HTML, CSS, JavaScript y frameworks populares.",
        institution: "UTN FRGP",
        inProgress: true,
    },
    {
        id: 3,
        title: "Technical Degree in Programming",
        description: "En esta carrera, aprenderás a crear aplicaciones web interactivas y funcionales utilizando tecnologías modernas como HTML, CSS, JavaScript y frameworks populares.",
        institution: "UTN FRGP",
        inProgress: true,
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
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "home",
    },
    {
        title: "Proyects",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "proyects",
    },
    {
        title: "Expirience",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "expirience",
    },
    {
        title: "About me",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "about-me",
    },
    {
        title: "Contact",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "contact",
    },
];


export const aboutMeData = [
    {
        title: "About me",
        description: "Passionate about technology and software development, with a strong foundation in both frontend and backend tools. Skilled in C++, Git, Microsoft SQL Server, and modern web technologies such as React, Next.js, Tailwind CSS, and JavaScript. Currently advancing my studies in Programming and Information Systems, while working as a Teaching Assistant in C++ Programming at the National Technological University (UTN). Always eager to learn, build, and grow."
    },
    {
        title: "Sobre mi",
        description: "descripsion en español Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit obcaecati provident ullam maxime in totam modi at, culpa omnis aliquam. Veniam dignissimos aspernatur eveniet? Quis vitae architecto eius expedita"
    }
]
