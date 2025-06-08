import spinner from "../../../assets/svgs/loading-spinner.svg";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import styles from "./styles.module.css";

export default function LoadingPage({ progress }) {
  useDocumentTitle("Carregando...");

  return (
    <div className={styles.ctn}>
      <div className={styles.loadCtn}>
        <span className={styles.icn}>
          <img src={spinner} alt="Spinner" />
          <FaIcon icon={fontAwesome.glasses} className={styles.spinnerIcn} />
        </span>
        <div className={styles.loadInd}>
          <progress
            className={styles.loadPgss}
            max={100}
            value={Math.floor(progress)}
          ></progress>
          <p className={styles.pgss}>{Math.floor(progress)}%</p>
        </div>
      </div>
    </div>
  );
}
