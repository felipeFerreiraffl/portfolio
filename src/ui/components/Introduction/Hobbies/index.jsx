import styles from "./style.module.css";
import { motion } from "framer-motion";

export default function HobbiesIntro({
  bgImage,
  color,
  border,
  icon,
  title,
  titleFont,
  mobTitleFont,
}) {
  return (
    <div
      className={styles.ctn}
      style={{ "--bg-image": `url(${bgImage})`, "--color": color }}
    >
      <motion.span
        className={styles.icn}
        style={{ "--icn-border": border }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
      >
        {icon}
      </motion.span>
      <motion.h1
        className={styles.ttl}
        style={{ "--ttl-font": titleFont, "--mob-ttl-font": mobTitleFont }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
      >
        {title}
      </motion.h1>
    </div>
  );
}
