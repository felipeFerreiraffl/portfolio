import styles from "./styles.module.css";

export default function ProjectCard({ title, src, techs = [] }) {
  return (
    <div className={styles.container} style={{ "--bg-image": `url(${src})` }}>
      <h3>{title}</h3>
      <div className={styles.iconsContainer}>
        {techs.map((tech, i) => (
          <span key={i}>{tech.icon}</span>
        ))}
      </div>
    </div>
  );
}
