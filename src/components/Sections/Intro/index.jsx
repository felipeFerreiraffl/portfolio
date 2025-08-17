import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import images from "../../../services/utils/jsons/images";

export default function Intro() {
  const { t } = useTranslation("sections");

  return (
    <div className={styles.container}>
      <SectionTitle title={t("intro.title")} subtitle={t("intro.subtitle")} />

      <div className={styles.content}>
        <div className={styles.profileContainer}>
          <div className={`${styles.ring} ${styles.firstRing}`}></div>
          <div className={`${styles.ring} ${styles.secondRing}`}></div>
          <img src={images.profile} alt="" loading="lazy" />
        </div>

        <div className={styles}>
          <div className={styles}>
            <h2>Felipe Ferreira Lima</h2>
            <p>{t("intro.infos.label")}</p>
          </div>
          <div className={styles}></div>
          <a href=""></a>
        </div>
      </div>
    </div>
  );
}
