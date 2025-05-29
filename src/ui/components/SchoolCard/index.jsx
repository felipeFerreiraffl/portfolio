import styles from "./style.module.css";
import { motion } from "framer-motion";

export default function SchoolCard({ img, name, href, alt }) {
  return (
    <motion.a
      href={href}
      className={styles.ctn}
      target="_blank"
      rel="noopener noreferer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <p className={styles.name}>{name}</p>
      <img src={img} alt={alt} className={styles.img} />
    </motion.a>
  );
}
