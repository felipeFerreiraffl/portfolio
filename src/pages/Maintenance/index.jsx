import { useTranslation } from "react-i18next";
import images from "../../services/utils/jsons/images";
import styles from "./styles.module.css";

export default function Maintenance() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.container}>
      {[...Array(11)].map((_, i) => (
        <div key={i} className={styles.ring}></div>
      ))}

      <div className={styles.titleContainer}>
        <h1>{t("maintenance.title")}</h1>
        <p>{t("maintenance.subtitle")}</p>
      </div>

      <img src={images.logo} alt={"Logo - Felipe Ferreira Lima"} />
    </div>
  );
}
