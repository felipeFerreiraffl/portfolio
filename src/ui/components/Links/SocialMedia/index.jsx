import FaIcon from "../../../../services/constants/icns/font-awesome/fontAwesome";
import styles from "./style.module.css";

export default function SocialMedia({ href, icon, color, border, title }) {
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
      <FaIcon icon={icon} />
    </a>
  );
}
