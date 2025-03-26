import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Crop, Pencil, Computer, Book, Rocket, Speech, Github } from "lucide-react";
import { title } from "process";
import { BiLogoTypescript } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaLinkedin, FaReact } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { IoLogoGithub, IoMdMail } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { RiFileDownloadFill, RiFolderDownloadLine, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGmail, SiTypescript } from "react-icons/si";

//CREADO APARTE, SE PUEDE BORRAR DESPUES

export const presentationData = [
    {
        saludo: "Hola! Yo soy",
        descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum nostrum esse placeat impedit voluptate accusamus eos nihil! Similique architecto nostrum vero dolorum quis quas odit nisi ut quod asperiores"
    },
    {
        saludo: "Hi! I'am",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum nostrum esse placeat impedit voluptate accusamus eos nihil! Similique architecto nostrum vero dolorum quis quas odit nisi ut quod asperiores"
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

    }
]


export const tecnologiesData = [
    {
        icon: <FaHtml5 size={60}/>,
        name: "HTML"
    },
    {
        icon: <FaCss3Alt size={60}/>,
        name: "CSS"
    },
    {
        icon: <FaSquareJs size={60}/>,
        name: "JavaScript"
    },
    {
        icon: <FaReact size={60}/>,
        name: "React"
    },
    {
        icon: <RiNextjsFill size={60}/>,
        name: "Next.Js"
    },
    {
        icon: <BiLogoTypescript size={60}/>,
        name: "TypeScript"
    },
    {
        icon: <RiTailwindCssFill size={60}/>,
        name: "Tailwind"
    },
]


export const socialNetworks = [
    {
        id: 1,
        logo: <FaLinkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <IoLogoGithub size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <IoMdMail size={30} strokeWidth={1} />,
        src: "#!",
    },

];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "#home",
    },
    {
        id: 2,
        title: "About me",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "#about",
    },
    {
        id: 3,
        title: "Proyects",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "#proyects",
    },
    {
        id: 4,
        title: "Expirience",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "#expirience",
    },
];


export const aboutMeData = [
    {
        title: "About me",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam ducimus totam eaque dolores corrupti laborum, natus quia reprehenderit dolor sint voluptas repudiandae beatae, explicabo quidem recusandae veniam. Natus, praesentium."
    },
    {
        title: "Sobre mi",
        description: "descripsion en español Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit obcaecati provident ullam maxime in totam modi at, culpa omnis aliquam. Veniam dignissimos aspernatur eveniet? Quis vitae architecto eius expedita"
    }
]


export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "TechSolutions",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Nov 2023 ",
    },
    {
        id: 2,
        title: "Creador de Experiencias Digitales",
        subtitle: "PixelCrafters",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "May 2021",
    },
    {
        id: 3,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "CodeForge Solutions",
        description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
        date: "Ago 2019",
    },
    {
        id: 4,
        title: "Prácticas Grado",
        subtitle: "WebWizards Inc.",
        description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
        date: "Mar 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];