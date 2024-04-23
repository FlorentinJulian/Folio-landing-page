import {
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Github,
  Youtube,
  Speech,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Youtube size={30} strokeWidth={1} />,
    src: "https://www.youtube.com/channel/UCje1wNLBlE5no1y0sz59cig",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/julian-florentin-04a515169/",
  },
  {
    id: 5,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/FlorentinJulian?tab=repositories",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },

  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "ReactJS",
    img: "/React.png",
  },
  {
    id: 2,
    title: "Redux toolkit",
    img: "/Redux.png",
  },
  {
    id: 3,
    title: "NextJS",
    img: "/Next.png",
  },
  {
    id: 4,
    title: "TailwindCSS",
    img: "/tailwind.png",
  },
  {
    id: 5,
    title: "SQL",
    img: "/SQL.png",
  },
  {
    id: 6,
    title: "Framer Motion",
    img: "/Framer.png",
  },
  {
    id: 7,
    title: "TypeScript",
    img: "/Type.png",
  },
  {
    id: 8,
    title: "Jest",
    img: "/Jest.png",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Responsive Pokedex",
    image: "/image-1.jpg",
    urlGithub: "https://github.com/FlorentinJulian/Pokedex",
    urlDemo: "https://pokedexfolio.netlify.app/",
  },
  {
    id: 2,
    title: "Reproductor Musical",
    image: "/image-2.jpg",
    urlGithub: "https://github.com/FlorentinJulian/Musical-Player",
    urlDemo: "https://musicaplayertesting.netlify.app/",
  },
  {
    id: 3,
    title: "Dinsey+ Clone",
    image: "/image-3.jpg",
    urlGithub: "https://github.com/FlorentinJulian/DisneyClone",
    urlDemo: "https://disneyfolio.netlify.app/",
  },
  {
    id: 4,
    title: "MechaFever",
    image: "/image-4.jpg",
    urlGithub: "https://github.com/FlorentinJulian/MechaFever",
    urlDemo: "https://pagefolio.netlify.app/",
  },
  {
    id: 5,
    title: "Libreria Musical",
    image: "/image-5.jpg",
    urlGithub: "https://github.com/FlorentinJulian/LibreriaMusical",
    urlDemo: "https://libreriamusicalfolio.netlify.app/",
  },
  {
    id: 6,
    title: "Api Clima",
    image: "/image-6.jpg",
    urlGithub: "https://github.com/FlorentinJulian/ApiClima",
    urlDemo: "https://folioapiclima.netlify.app/",
  },
  {
    id: 7,
    title: "Eshop ",
    image: "/image-7.jpg",
    urlGithub: "https://github.com/FlorentinJulian/Eshop",
    urlDemo: "https://shopfolio.netlify.app/",
  },
  {
    id: 8,
    title: "E-commerce web",
    image: "/image-8.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];
