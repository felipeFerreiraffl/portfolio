import styles from "./style.module.css";
import { motion } from "framer-motion";

export default function SchoolCard({ img, name, href }) {
  return (
    <motion.a
      href={href}
      className={styles.ctn}
      target="_blank"
      rel="noopener noreferer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <p className={styles.name}>{name}</p>
      <img src={img} alt={name} className={styles.img} />
    </motion.a>
  );
}
