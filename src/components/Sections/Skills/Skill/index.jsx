import styles from "./styles.module.css";

export default function Skill({ name, icon }) {
  return (
    <div className={styles}>
      <h3 className={styles}>{name}</h3>
      <span className={styles}>{icon}</span>
    </div>
  );
}
