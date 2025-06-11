import FaIcon from "../../../../services/constants/icns/font-awesome/fontAwesome";
import styles from "./style.module.css";

export default function Auxiliary({
  href,
  icon,
  color,
  border,
  title,
  linkName,
}) {
  return (
    <a
      className={styles.link}
      href={href}
      target="_blank"
      tabIndex={0}
      rel="noopener noreferer"
      style={{ "--color": color, "--border": border }}
      title={title}
      role="button"
    >
      <span className={styles.icn}>
        <FaIcon icon={icon} />
      </span>
      <p className={styles.name}>{linkName}</p>
    </a>
  );
}
