import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactComponent as MongoDBIcon } from "../assets/svgs/icons/mongodb.svg";
import { ReactComponent as MySQLIcon } from "../assets/svgs/icons/mysql.svg";
import { ReactComponent as SpringBootIcon } from "../assets/svgs/icons/springboot.svg";
import { ReactComponent as TypeScriptIcon } from "../assets/svgs/icons/typescript.svg";
import icons from "../utils/icons";
import images from "../utils/images";

// Dados dos habilidades
export const skillsData = [
  {
    title: "Front-End",
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
      {
        techName: "TypeScript",
        techIcon: <TypeScriptIcon style={{ fill: "var(--color-text)" }} />,
      },
    ],
  },
  {
    title: "Back-End",
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
    title: "skills.sections.database",
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
    title: "skills.sections.tools",
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

// Dados de experiências
export const experiencesData = [
  {
    title: "experience.cards.one.title",
    src: images.experiences.exp1,
    srcAlt: "experience.cards.one.img_alt",
    date: "07/2023 - 07/2025",
    descs: [
      { desc1: "experience.cards.one.descs.one" },
      { desc2: "experience.cards.one.descs.two" },
      { desc3: "experience.cards.one.descs.three" },
    ],
  },
];

// Dados de projetos
export const projectsData = [
  {
    title: "projects.cards.math_calcs.title",
    src: images.projects.mathCalculations,
    description: "projects.cards.math_calcs.desc",
    techs: [
      { icon: <Icon icon={icons.remix.brand.react} /> },
      { icon: <Icon icon={icons.remix.brand.css} /> },
      { icon: <Icon icon={icons.remix.brand.javascript} /> },
      { icon: <Icon icon={icons.remix.brand.vercel} /> },
    ],
  },
  {
    title: "projects.cards.crud_lib.title",
    src: images.projects.crudLibrary,
    description: "projects.cards.crud_lib.desc",
    techs: [
      { icon: <Icon icon={icons.remix.brand.react} /> },
      { icon: <Icon icon={icons.remix.brand.css} /> },
      { icon: <Icon icon={icons.remix.brand.javascript} /> },
      { icon: <Icon icon={icons.remix.brand.java} /> },
      { icon: <SpringBootIcon style={{ fill: "var(--color-text)" }} /> },
    ],
  },
  {
    title: "projects.cards.kitsu.title",
    src: images.projects.animesMangasKitsu,
    description: "projects.cards.kitsu.desc",
    techs: [
      { icon: <Icon icon={icons.remix.brand.react} /> },
      { icon: <Icon icon={icons.remix.brand.css} /> },
      { icon: <Icon icon={icons.remix.brand.javascript} /> },
      { icon: <Icon icon={icons.remix.common.server} /> },
      { icon: <Icon icon={icons.remix.brand.vercel} /> },
    ],
  },
  {
    title: "projects.cards.tsauth.title",
    src: images.projects.tsAuth,
    description: "projects.cards.tsauth.desc",
    techs: [
      { icon: <Icon icon={icons.remix.brand.react} /> },
      { icon: <Icon icon={icons.remix.brand.css} /> },
      { icon: <TypeScriptIcon style={{ fill: "var(--color-text)" }} /> },
      { icon: <Icon icon={icons.remix.brand.nodejs} /> },
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
