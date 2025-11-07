import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../../data/data";
import styles from "./styles.module.css";

export default function Projects({ ref }) {
  const { t } = useTranslation("sections");

  return (
    <div ref={ref} className="section-container" tabIndex={0}>
      <SectionTitle
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />

      <div className={styles.cardsContainer}>
        {projectsData.map((data, i) => (
          <ProjectCard
            key={i}
            href={data.href}
            title={t(data.title)}
            src={data.src}
            desc={t(data.description)}
            techs={data.techs}
          />
        ))}
      </div>
    </div>
  );
}
