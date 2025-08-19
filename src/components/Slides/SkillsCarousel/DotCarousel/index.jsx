import styles from "./styles.module.css";

export default function DotCarousel({ selected, onClick }) {
  return (
    <button className={styles.container} onClick={onClick}>
      <div
        className={`${styles.ring} ${styles.ringOne}`}
        style={{ visibility: selected ? "visible" : "hidden" }}
      ></div>
      <div
        className={`${styles.ring} ${styles.ringTwo}`}
        style={{ visibility: selected ? "visible" : "hidden" }}
      ></div>
      <div className={styles.dot}></div>
    </button>
  );
}
