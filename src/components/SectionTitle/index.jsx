import styles from "./styles.module.css";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className={styles.container}>
      <div className={styles.mainTitleContainer}>
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
          <div className={styles.diamond}></div>
        </div>
        <h2>{title}</h2>
        <div className={styles.lineContainer}>
          <div className={styles.diamond}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      <p>{subtitle}</p>
    </div>
  );
}
