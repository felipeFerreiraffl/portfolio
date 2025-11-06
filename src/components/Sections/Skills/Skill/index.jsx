import styles from "./styles.module.css";

export default function Skill({ name, icon }) {
  return (
    <div className={styles.container} title={name} aria-label={name}>
      {[...Array(2)].map((_, i) => (
        <div key={i} className={styles.ring}></div>
      ))}

      <h3 className={styles.name}>{name}</h3>
      <span className={styles.icon}>{icon}</span>
    </div>
  );
}
