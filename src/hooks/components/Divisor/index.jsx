import styles from "./style.module.css";

export default function Divisor({ marginTop, color }) {
  return (
    <div className={styles.ctn} style={{ marginTop: marginTop }}>
      <hr
        className={`${styles.line} ${styles.one}`}
        style={{ backgroundColor: color }}
      />
      <hr
        className={`${styles.line} ${styles.two}`}
        style={{ backgroundColor: color }}
      />
      <hr
        className={`${styles.line} ${styles.three}`}
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
