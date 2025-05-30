import spinner from "../../../assets/svgs/loading-spinner.svg";
import { FaIcnGlasses } from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import styles from "./styles.module.css";

export default function LoadingPage({ progress }) {
  useDocumentTitle("Carregando...");

  return (
    <div className={styles.ctn}>
      <div className={styles["load-ctn"]}>
        <span className={styles.icn}>
          <img src={spinner} alt="Spinner" />
          <FaIcnGlasses
            icon={fontAwesome.glasses}
            className={styles["spinner-icn"]}
          />
        </span>
        <div className={styles["load-ind"]}>
          <progress
            className={styles["load-pgss"]}
            max={100}
            value={Math.floor(progress)}
          ></progress>
          <p className={styles.pgss}>{Math.floor(progress)}%</p>
        </div>
      </div>
    </div>
  );
}
