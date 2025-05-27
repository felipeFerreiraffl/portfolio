import styles from "./style.module.css";

export default function CourseConclusion({
  name,
  progress,
  progressBgColor,
  progressColor,
  startYear,
  endYear,
}) {
  return (
    <div className={styles.ctn}>
      <div className={styles["pgss-ctn"]}>
        <h4 className={styles.ttl}>{name}</h4>
        <progress
          className={styles["pgss-bar"]}
          style={{
            "--pgss-bg-color": progressBgColor,
            "--pgss-color": progressColor,
          }}
          max={100}
          value={progress}
        ></progress>
      </div>
      <div className={styles["conclu-ctn"]}>
        <p className={styles.date}>{startYear}</p>
        <p className={styles.pgss}>{progress}%</p>
        <p className={styles.date}>{endYear}</p>
      </div>
    </div>
  );
}
