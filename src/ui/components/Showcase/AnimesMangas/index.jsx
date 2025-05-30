import FaIcon from "../../../../services/constants/icns/font-awesome/fontAwesome";
import styles from "./style.module.css";

export default function AnimesMangasShowcase({
  type,
  flexDirection,
  alignItems,
  title,
  desc,
  icon,
  data = [],
}) {
  return (
    <div
      className={styles.ctn}
      style={{ "--flex-direc": flexDirection, "--align-items": alignItems }}
    >
      <div className={styles["cont-ctn"]}>
        <div className={styles["txt-ctn"]}>
          <h2 className={styles.ttl}>{title}</h2>
          <p className={styles.desc}>{desc}</p>
        </div>
        <span className={styles.icn}>{<FaIcon icon={icon} />}</span>
      </div>
      <div className={styles.crsl}></div>
    </div>
  );
}
