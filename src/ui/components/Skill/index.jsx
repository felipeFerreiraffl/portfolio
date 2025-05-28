import { FaIcnStar } from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import styles from "./style.module.css";
import { motion } from "framer-motion";

export default function Skill({ icon, name, rating }) {
  return (
    <motion.div
      className={styles.ctn}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className={styles["icn-ctn"]}>
        <span className={styles.icn} role="img">
          {icon}
        </span>
        <p className={styles.name}>{name}</p>
      </div>
      <div className={styles["star-ctn"]}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? styles["star-colored"] : styles.star}
            role="img"
          >
            <FaIcnStar icon={fontAwesome.star} />
          </span>
        ))}
      </div>
    </motion.div>
  );
}
