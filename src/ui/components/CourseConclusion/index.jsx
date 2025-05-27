import styles from "./style.module.css";
import { motion } from "framer-motion";

export default function CourseConclusion({
  name,
  progress,
  progressBgColor,
  progressColor,
  startYear,
  endYear,
}) {
  return (
    <motion.div
      className={styles.ctn}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
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
    </motion.div>
  );
}
