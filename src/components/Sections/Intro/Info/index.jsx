import styles from "./styles.module.css";

export default function Info({ title, desc }) {
  return (
    <li className={styles.container}>
      <div className={styles.listTitleContainer}>
        <div className={styles.bullet}></div>
        <h3 className={styles.headline}>{title}</h3>
      </div>
      <p className={styles.paragraph}>{desc}</p>
    </li>
  );
}
