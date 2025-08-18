import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import icons from "./icons";
import images from "./images";

const { t: tSections } = useTranslation("sections");

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
      { techName: "Spring Boot", techIcon: "" },
      {
        techName: "Rest API",
        techIcon: <Icon icon={icons.remix.common.server} />,
      },
    ],
  },
  {
    title: tSections("skills.carousel_titles.database"),
    imgSrc: images.skills.database,
    techs: [
      { techName: "MySQL", techIcon: "" },
      { techName: "MongoDB", techIcon: "" },
    ],
  },
  {
    title: tSections("skills.carousel_titles.tools"),
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

export const experiencesData = [{}];

export const projectsData = [{}];
