import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import styles from "./styles.module.css";
import Tech from "../../Slides/SkillsCarousel/Tech";
import LocalIcon from "../../Icon";
import icons from "../../../services/utils/jsons/icons";
import { Icon } from "@iconify/react/dist/iconify.js";
import Slide from "../../Slides/SkillsCarousel/Slide";
import profile from "../../../assets/imgs/profile.webp";

export default function Skills() {
  const { t: tSections } = useTranslation("sections");

  const data = [
    {
      techName: "Tech 1",
      techIcon: <Icon icon={icons.remix.brand.github} />,
    },
    {
      techName: "Tech 2",
      techIcon: <Icon icon={icons.remix.brand.github} />,
    },
    {
      techName: "Tech 3",
      techIcon: <Icon icon={icons.remix.brand.github} />,
    },
    {
      techName: "Tech 4",
      techIcon: <Icon icon={icons.remix.brand.github} />,
    },
  ];

  return (
    <div className={styles}>
      <SectionTitle
        title={tSections("skills.title")}
        subtitle={tSections("skills.subtitle")}
      />

      <Slide
        title={"Feedasassas"}
        src={profile}
        alt={"Image"}
        techName={data.find((tech) => tech.techName)}
        techIcon={data.find((tech) => tech.techIcon)}
      />
      {/* <LocalIcon icon={icons.local.mongodb} alt={"MongoDB"} /> */}
    </div>
  );
}
