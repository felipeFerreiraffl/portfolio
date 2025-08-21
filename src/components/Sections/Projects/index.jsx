import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import { projectsData } from "../../../services/utils/jsons/data";
import ProjectCard from "./ProjectCard";
import styles from "./styles.module.css";

export default function Projects({ ref }) {
  const { t: tSections } = useTranslation("sections");

  return (
    <div ref={ref} className="section-container" tabIndex={0}>
      <SectionTitle
        title={tSections("projects.title")}
        subtitle={tSections("projects.subtitle")}
      />

      <div className={styles.cardsContainer}>
        {projectsData.map((proj, i) => (
          <ProjectCard
            key={i}
            href={proj.href}
            title={tSections(proj.title)}
            src={proj.imgSrc}
            techs={proj.techs}
          />
        ))}
      </div>
    </div>
  );
}
