import styles from "./styles.module.css";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <div className={styles}>
        <div className={styles}></div>
        <h2>{title}</h2>
        <div className={styles}></div>
      </div>

      <p>{subtitle}</p>
    </div>
  );
}
