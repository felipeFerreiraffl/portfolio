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
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.pgssCtn}>
        <h4 className={styles.ttl}>{name}</h4>
        <progress
          className={styles.pgssBar}
          style={{
            "--pgss-bg-color": progressBgColor,
            "--pgss-color": progressColor,
          }}
          max={100}
          value={progress}
        ></progress>
      </div>
      <div className={styles.concluCtn}>
        <p className={styles.date}>{startYear}</p>
        <p className={styles.pgss}>{progress}%</p>
        <p className={styles.date}>{endYear}</p>
      </div>
    </motion.div>
  );
}
