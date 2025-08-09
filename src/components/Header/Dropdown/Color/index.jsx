import styles from "./styles.module.css";

export default function ColorDropdown() {
  return (
    <div className={styles.container}>
      <button className={`${styles.circle} ${styles.light}`}></button>
      <button className={`${styles.circle} ${styles.dark}`}></button>
    </div>
  );
}
