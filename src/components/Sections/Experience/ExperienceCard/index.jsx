import styles from "./styles.module.css";

export default function ExperienceCard({ src, title, time, desc }) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={src} alt={title} loading="lazy" title={title} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <h3>{title}</h3>
          <p>{time}</p>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}
