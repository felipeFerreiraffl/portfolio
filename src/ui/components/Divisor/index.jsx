import styles from "./style.module.css";

export default function Divisor({ marginTop, color }) {
  return (
    <div className={styles.ctn} style={{ margin: `${marginTop}px 0` }}>
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
