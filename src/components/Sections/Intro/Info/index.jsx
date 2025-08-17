import styles from "./styles.module.css";

export default function Info({ title, desc }) {
  return (
    <div className={styles.container}>
      <div className={styles.listTitleContainer}>
        <div className={styles.bullet}></div>
        <h3>{title}</h3>
      </div>
      <p>{desc}</p>
    </div>
  );
}
