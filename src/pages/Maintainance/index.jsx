import { useTranslation } from "react-i18next";
import images from "../../services/utils/jsons/images";
import styles from "./styles.module.css";

export default function Maintenance() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className={styles}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`${styles} ${styles}`}></div>
        ))}
      </div>
      <div className={styles}>
        <h1 className={styles}>{t("maintenance.title")} :(</h1>
        <p className={styles}>{t("maintenance.subtitle")}</p>
      </div>

      <img src={images.logo} alt={"Logo - Felipe Ferreira Lima"} />
    </div>
  );
}
