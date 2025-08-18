/* ---------- Componente de ícones ---------- */
import styles from "./styles.module.css";

export default function LocalIcon({ icon, alt }) {
  return <img src={icon} alt={alt} className={styles.img} />;
}
