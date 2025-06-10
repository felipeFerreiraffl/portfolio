import { motion } from "framer-motion";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import styles from "./style.module.css";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome.js";

export default function Skill({ icon, name, rating }) {
  return (
    <motion.div
      className={styles.ctn}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.icnCtn}>
        <span className={styles.icn} role="img">
          {icon}
        </span>
        <p className={styles.name}>{name}</p>
      </div>
      <div className={styles.starCtn}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? styles.starColored : styles.star}
            role="img"
          >
            <FaIcon icon={fontAwesome.star} />
          </span>
        ))}
      </div>
    </motion.div>
  );
}
