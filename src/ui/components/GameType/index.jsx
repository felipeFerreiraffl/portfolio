import GiIcon from "../../../services/constants/icns/game-icons/gameIcons";
import styles from "./style.module.css";
import { motion } from "framer-motion";

export default function GameType({ icon, type, tooltip, active, animDelay }) {
  return (
    <motion.div
      className={`${styles.ctn} ${styles.tooltip} ${
        active === true ? styles.active : ""
      }`}
      data-tooltip={tooltip}
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ transition: 1, ease: "easeInOut", delay: animDelay }}
      viewport={{ once: true, amount: 0.3 }}
      aria-hidden={true}
    >
      <span className={styles.icn}>
        <GiIcon icon={icon} />
      </span>
      <p className={styles.txt}>{type}</p>
    </motion.div>
  );
}
