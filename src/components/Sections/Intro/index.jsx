import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import images from "../../../services/utils/jsons/images";

export default function Intro() {
  const { t: tSection } = useTranslation("sections");
  const { t: tCommon } = useTranslation("common");

  return (
    <div className={styles.container}>
      <SectionTitle
        title={tSection("intro.title")}
        subtitle={tSection("intro.subtitle")}
      />

      <div className={styles.content}>
        <div className={styles.profileContainer}>
          <div className={`${styles.ring} ${styles.firstRing}`}></div>
          <div className={`${styles.ring} ${styles.secondRing}`}></div>
          <img src={images.profile} alt="" loading="lazy" />
        </div>

        <div className={styles.infosContainer}>
          <div className={styles.titleContainer}>
            <h2>Felipe Ferreira Lima</h2>
            <p>{tSection("intro.infos.label")}</p>
          </div>
          <div className={styles.infos}></div>
          <a href="">{tCommon("button_labels.curriculum_vitae")}</a>
        </div>
      </div>
    </div>
  );
}
