import styles from "./styles.module.css";

export default function Tech({ name, icon }) {
  return (
    <div className={styles.container}>
      <p className={styles}>{name}</p>
      <span>{icon}</span>
    </div>
  );
}
