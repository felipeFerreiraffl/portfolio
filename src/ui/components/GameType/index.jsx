import GiIcon from "../../../services/constants/icns/game-icons/gameIcons";
import styles from "./style.module.css";

export default function GameType({ icon, type, tooltip, active }) {
  return (
    <div
      className={`${styles.ctn} ${styles.tooltip} ${
        active === true ? styles.active : ""
      }`}
      data-tooltip={tooltip}
      aria-hidden={true}
    >
      <span className={styles.icn}>
        <GiIcon icon={icon} />
      </span>
      <p className={styles.txt}>{type}</p>
    </div>
  );
}
