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
export const experiencesData = [{}];

// Dados dos projetos
export const projectsData = [{}];
