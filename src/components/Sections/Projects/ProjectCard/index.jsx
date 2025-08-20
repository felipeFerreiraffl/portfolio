import styles from "./styles.module.css";

export default function ProjectCard({ title, src, techs = [], href }) {
  return (
    <a
      href={href}
      rel="noopener noreferer"
      className={styles.container}
      style={{ "--bg-image": `url(${src})` }}
      title={title}
    >
      <h3>{title}</h3>
      <div className={styles.iconsContainer}>
        {techs.map((tech, i) => (
          <span key={i}>{tech.icon}</span>
        ))}
      </div>
    </a>
  );
}
