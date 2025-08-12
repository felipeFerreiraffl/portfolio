import styles from "./styles.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={`${styles.ring} ${styles.ringOne}`}></div>
      <div className={`${styles.ring} ${styles.ringTwo}`}></div>
      <div className={`${styles.ring} ${styles.ringThree}`}></div>
      <div className={`${styles.ring} ${styles.ringFour}`}></div>
      <div className={`${styles.ring} ${styles.ringFive}`}></div>
      <div className={`${styles.ring} ${styles.ringSix}`}></div>
      <div className={`${styles.ring} ${styles.ringSeven}`}></div>
      <div className={`${styles.ring} ${styles.ringEight}`}></div>

      <div className={styles.name}>Felipe Ferreira Lima</div>

      <div className={styles.orbitDotContainer}>
        <div className={styles.orbitDot}></div>
      </div>
    </div>
  );
}
