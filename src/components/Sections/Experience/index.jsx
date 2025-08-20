import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import styles from "./styles.module.css";
import ExperienceCard from "./ExperienceCard";
import images from "../../../services/utils/jsons/images";
import { experiencesData } from "../../../services/utils/jsons/data";

export default function Experience() {
  const { t: tSections } = useTranslation("sections");

  return (
    <div className={`section-container ${styles.container}`} tabIndex={0}>
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

      <div className={styles.background}>
        <div className={`${styles.treeContainer} ${styles.treeContainerLeft}`}>
          <div className={styles.tree}>
            <div className={`${styles.rectangle} ${styles.big}`}></div>
            <div className={`${styles.stem} ${styles.stemBig}`}></div>
          </div>
          <div className={styles.tree}>
            <div className={`${styles.rectangle} ${styles.small}`}></div>
            <div className={`${styles.stem} ${styles.stemSmall}`}></div>
          </div>
        </div>

        <div className={`${styles.treeContainer} ${styles.treeContainerRight}`}>
          <div className={styles.tree}>
            <div className={`${styles.rectangle} ${styles.small}`}></div>
            <div className={`${styles.stem} ${styles.stemSmall}`}></div>
          </div>
          <div className={styles.tree}>
            <div className={`${styles.rectangle} ${styles.big}`}></div>
            <div className={`${styles.stem} ${styles.stemBig}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
