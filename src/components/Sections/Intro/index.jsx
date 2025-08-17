import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";

export default function Intro() {
  const { t } = useTranslation("sections");

  return (
    <div className={styles.container}>
      <SectionTitle title={t("intro.title")} subtitle={t("intro.subtitle")} />

      <div className={styles.content}>
        <div className={styles}>
          <div className={styles}></div>
          <div className={styles}></div>
          <img src={""} alt="" />
        </div>

        <div className={styles}>
          <div className={styles}>
            <h2></h2>
            <p></p>
          </div>
          <div className={styles}></div>
          <a href=""></a>
        </div>
      </div>
    </div>
  );
}
