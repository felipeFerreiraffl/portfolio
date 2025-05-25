import { motion } from "motion/react";
import { FaAccessibleIcon } from "react-icons/fa";
import styles from "./style.module.css";

export default function CommonIntro({ icon, title, subtitle, color, bgImage }) {
  return (
    <motion.div
      className={styles.ctn}
      style={{ "--bg-image": `url(${bgImage})` }}
    >
      <i className={styles.icn} style={{ color: color, borderColor: color }}>
        <FaAccessibleIcon />
      </i>
      <div className={styles["txt-ctn"]}>
        <h1 className={styles.ttl} style={{ color: color, borderColor: color }}>
          {title}
        </h1>
        <p className={styles.subttl}>{subtitle}</p>
      </div>
    </motion.div>
  );
}
