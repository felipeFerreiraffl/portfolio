import styles from "./style.module.css";

export default function Divisor({ marginTop, color }) {
  return (
    <div className={styles.ctn} style={{ marginTop: marginTop }}>
      <hr className={`${styles.line} ${styles.one}`} style={{ color: color }} />
      <hr className={`${styles.line} ${styles.two}`} style={{ color: color }} />
      <hr
        className={`${styles.line} ${styles.three}`}
        style={{ color: color }}
      />
    </div>
  );
}
