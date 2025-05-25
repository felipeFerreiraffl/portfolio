import { FaIcnGlasses } from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import styles from "./styles.module.css";
import spinner from "../../../assets/svgs/loading-spinner.svg";

export default function Loading() {
  return (
    <div className={styles.ctn}>
      <img
        src={spinner}
        alt="Spinner"
        className={styles.spinner}
        loading="lazy"
      />
      <FaIcnGlasses icon={fontAwesome.glasses} className={styles.icn} />
    </div>
  );
}
