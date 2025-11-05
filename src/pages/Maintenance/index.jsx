import { useTranslation } from "react-i18next";
import images from "../../utils/images";
import styles from "./styles.module.css";

export default function Maintenance() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.container}>
      {[...Array(11)].map((_, i) => (
        <div key={i} className={styles.ring}></div>
      ))}

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{t("maintenance.title")}</h1>
        <p className={styles.subtitle}>{t("maintenance.subtitle")}</p>
      </div>

      <img
        className={styles.logo}
        src={images.logo}
        alt={"Logo - Felipe Ferreira Lima"}
      />
    </div>
  );
}
