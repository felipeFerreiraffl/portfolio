import GiIcon from "../../../../services/constants/icns/game-icons/gameIcons";
import styles from "./style.module.css";

export default function GamesShowcase({ title, subtitle, icon }) {
  return (
    <div className={styles.ctn}>
      <div className={styles.cont}>
        <div className={styles.txtCtn}>
          <h2 className={styles.ttl}>{title}</h2>
          <p className={styles.subttl}>{subtitle}</p>
        </div>
        <span className={styles.icn}>
          <GiIcon icon={icon} />
        </span>
      </div>

      <div className={styles.crsl}></div>
    </div>
  );
}
