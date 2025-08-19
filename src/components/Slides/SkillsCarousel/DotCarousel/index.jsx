import styles from "./styles.module.css";

export default function DotCarousel({ selected, onClick, title }) {
  return (
    <button
      className={styles.container}
      onClick={onClick}
      title={title}
      aria-label={title}
      tabIndex={0}
    >
      <div
        className={`${styles.ring} ${styles.ringOne} ${
          selected ? styles.selected : styles.normal
        }`}
      ></div>
      <div
        className={`${styles.ring} ${styles.ringTwo} ${
          selected ? styles.selected : styles.normal
        }`}
      ></div>
      <div className={styles.dot}></div>
    </button>
  );
}
