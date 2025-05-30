import { motion } from "motion/react";
import styles from "./style.module.css";

export default function CommonIntro({ icon, title, subtitle, color, bgImage }) {
  return (
    <div className={styles.ctn} style={{ "--bg-image": `url(${bgImage})` }}>
      <motion.span
        className={styles.icn}
        style={{ color: color, borderColor: color }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
      >
        {icon}
      </motion.span>
      <motion.div
        className={styles["txt-ctn"]}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
      >
        <h1 className={styles.ttl} style={{ color: color, borderColor: color }}>
          {title}
        </h1>
        <p className={styles.subttl}>{subtitle}</p>
      </motion.div>
    </div>
  );
}
