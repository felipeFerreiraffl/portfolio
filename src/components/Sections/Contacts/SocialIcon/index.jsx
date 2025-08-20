import styles from "./styles.module.css";

export default function SocialIcon({ icon, title, href }) {
  return (
    <a
      className={styles.link}
      href={href}
      target="_blank"
      rel="noopener noreferer"
      title={title}
      aria-label={title}
    >
      <div className={`${styles.ring} ${styles.ringOne}`}></div>
      <div className={`${styles.ring} ${styles.ringTwo}`}></div>
      <span>{icon}</span>
    </a>
  );
}
