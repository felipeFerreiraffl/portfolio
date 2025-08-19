import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import styles from "./styles.module.css";
import ExperienceCard from "./ExperienceCard";
import images from "../../../services/utils/jsons/images";
import { experiencesData } from "../../../services/utils/jsons/data";

export default function Experience() {
  const { t: tSections } = useTranslation("sections");

  return (
    <div className="section-container">
      <SectionTitle
        title={tSections("experience.title")}
        subtitle={tSections("experience.subtitle")}
      />

      {experiencesData.map((exp, i) => (
        <ExperienceCard
          key={i}
          title={tSections(exp.title)}
          time={exp.time}
          desc={tSections(exp.desc)}
          src={exp.imgSrc}
        />
      ))}
    </div>
  );
}
