import styles from "./styles.module.css";

export default function DotCarousel({ selected, onClick }) {
  return (
    <button className={styles.container} onClick={onClick}>
      <div
        className={`${styles.ring} ${styles.ringOne} ${
          selected ? styles.selected : ""
        }`}
      ></div>
      <div
        className={`${styles.ring} ${styles.ringTwo} ${
          selected ? styles.selected : ""
        }`}
      ></div>
      <div className={styles.dot}></div>
    </button>
  );
}
