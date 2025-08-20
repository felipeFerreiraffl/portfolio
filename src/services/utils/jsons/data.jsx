import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactComponent as MongoDBIcon } from "../../../assets/svgs/icons/mongodb.svg";
import { ReactComponent as MySQLIcon } from "../../../assets/svgs/icons/mysql.svg";
import { ReactComponent as SpringBootIcon } from "../../../assets/svgs/icons/springboot.svg";
import icons from "./icons";
import images from "./images";

// Dados dos habilidades
export const skillsData = [
  {
    title: "Front-End",
    imgSrc: images.skills.frontend,
    techs: [
      { techName: "HTML", techIcon: <Icon icon={icons.remix.brand.html} /> },
      { techName: "CSS", techIcon: <Icon icon={icons.remix.brand.css} /> },
      {
        techName: "JavaScript",
        techIcon: <Icon icon={icons.remix.brand.javascript} />,
      },
      {
        techName: "React.js",
        techIcon: <Icon icon={icons.remix.brand.react} />,
      },
    ],
  },
  {
    title: "Back-End",
    imgSrc: images.skills.backend,
    techs: [
      { techName: "Java", techIcon: <Icon icon={icons.remix.brand.java} /> },
      {
        techName: "Node.js",
        techIcon: <Icon icon={icons.remix.brand.nodejs} />,
      },
      {
        techName: "Spring Boot",
        techIcon: <SpringBootIcon style={{ fill: "var(--color-text)" }} />,
      },
      {
        techName: "Rest API",
        techIcon: <Icon icon={icons.remix.common.server} />,
      },
    ],
  },
  {
    title: "skills.carousel_titles.database",
    imgSrc: images.skills.database,
    techs: [
      {
        techName: "MySQL",
        techIcon: <MySQLIcon style={{ fill: "var(--color-text)" }} />,
      },
      {
        techName: "MongoDB",
        techIcon: <MongoDBIcon style={{ fill: "var(--color-text)" }} />,
      },
    ],
  },
  {
    title: "skills.carousel_titles.tools",
    imgSrc: images.skills.tools,
    techs: [
      {
        techName: "Github",
        techIcon: <Icon icon={icons.remix.brand.github} />,
      },
      {
        techName: "Vercel",
        techIcon: <Icon icon={icons.remix.brand.vercel} />,
      },
      { techName: "Figma", techIcon: <Icon icon={icons.remix.brand.figma} /> },
    ],
  },
];

// Dados de exxperiências
export const experiencesData = [
  {
    imgSrc: images.experiences.exp1,
    title: "experience.cards.one.title",
    time: "2023-2025",
    desc: "experience.cards.one.desc",
  },
];

// Dados dos projetos
export const projectsData = [
  {
    title: "projects.cards.proj1.title",
    imgSrc: images.projects.personalSite,
    href: "https://github.com/felipeFerreiraffl/projeto-sitePessoal",
    techs: [
      { icon: <Icon icon={icons.remix.brand.html} /> },
      { icon: <Icon icon={icons.remix.brand.css} /> },
    ],
  },
  {
    title: "projects.cards.proj2.title",
    imgSrc: images.projects.menuFelicitos,
    href: "https://github.com/felipeFerreiraffl/pagina-cardapio",
    techs: [
      { icon: <Icon icon={icons.remix.brand.html} /> },
      { icon: <Icon icon={icons.remix.brand.css} /> },
    ],
  },
  {
    title: "projects.cards.proj3.title",
    imgSrc: images.projects.apiWeather1,
    href: "https://github.com/felipeFerreiraffl/clima-api",
    techs: [
      { icon: <Icon icon={icons.remix.brand.html} /> },
      { icon: <Icon icon={icons.remix.brand.css} /> },
      { icon: <Icon icon={icons.remix.brand.javascript} /> },
    ],
  },
  {
    title: "projects.cards.proj4.title",
    imgSrc: images.projects.professionalPortfolio1,
    href: "https://github.com/felipeFerreiraffl/professional-portifolio",
    techs: [
      { icon: <Icon icon={icons.remix.brand.html} /> },
      { icon: <Icon icon={icons.remix.brand.css} /> },
      { icon: <Icon icon={icons.remix.brand.javascript} /> },
      { icon: <Icon icon={icons.remix.brand.vercel} /> },
    ],
  },
  {
    title: "projects.cards.proj5.title",
    imgSrc: images.projects.apiWeather2,
    href: "https://github.com/felipeFerreiraffl/app-temperatura",
    techs: [
      { icon: <Icon icon={icons.remix.brand.react} /> },
      { icon: <Icon icon={icons.remix.brand.css} /> },
      { icon: <Icon icon={icons.remix.brand.javascript} /> },
      { icon: <Icon icon={icons.remix.common.server} /> },
      { icon: <Icon icon={icons.remix.brand.vercel} /> },
    ],
  },
  {
    title: "projects.cards.proj6.title",
    imgSrc: images.projects.mathCalculations,
    href: "https://github.com/felipeFerreiraffl/calculos-matematicos",
    techs: [
      { icon: <Icon icon={icons.remix.brand.react} /> },
      { icon: <Icon icon={icons.remix.brand.css} /> },
      { icon: <Icon icon={icons.remix.brand.javascript} /> },
      { icon: <Icon icon={icons.remix.brand.vercel} /> },
    ],
  },
  {
    title: "projects.cards.proj7.title",
    imgSrc: images.projects.crudLibrary,
    href: "https://github.com/felipeFerreiraffl/crud-livraria",
    techs: [
      { icon: <Icon icon={icons.remix.brand.react} /> },
      { icon: <Icon icon={icons.remix.brand.css} /> },
      { icon: <Icon icon={icons.remix.brand.javascript} /> },
      { icon: <Icon icon={icons.remix.brand.java} /> },
      { icon: <MySQLIcon style={{ fill: "var(--color-text)" }} /> },
      { icon: <SpringBootIcon style={{ fill: "var(--color-text)" }} /> },
    ],
  },
  {
    title: "projects.cards.proj8.title",
    imgSrc: images.projects.animesMangasKitsu,
    href: "https://github.com/felipeFerreiraffl/anime-manga-info",
    techs: [
      { icon: <Icon icon={icons.remix.brand.html} /> },
      { icon: <Icon icon={icons.remix.brand.css} /> },
    ],
  },
  {
    title: "projects.cards.proj9.title",
    imgSrc: images.projects.phaserTrain,
    href: "https://github.com/felipeFerreiraffl/phaser-train-2",
    techs: [
      { icon: <Icon icon={icons.remix.brand.react} /> },
      { icon: <Icon icon={icons.remix.brand.javascript} /> },
      { icon: <Icon icon={icons.remix.brand.vercel} /> },
    ],
  },
];

export const socialLinks = [
  {
    title: "tooltip.socials.github",
    icon: <Icon icon={icons.remix.brand.github} />,
    href: "https://github.com/felipeFerreiraffl",
  },
  {
    title: "tooltip.socials.linkedin",
    icon: <Icon icon={icons.remix.brand.linkedin} />,
    href: "https://www.linkedin.com/in/felipe-ferreira-959bb8271/",
  },
  {
    title: "tooltip.socials.instagram",
    icon: <Icon icon={icons.remix.brand.instagram} />,
    href: "https://www.instagram.com/felipe_ffl7/",
  },
];
