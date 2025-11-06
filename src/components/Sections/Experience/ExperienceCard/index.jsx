import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

export default function ExperienceCard({ title, src, time, descs = [] }) {
  const { t } = useTranslation("sections");

  return (
    <div className={styles.container} tabIndex={0}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{t(title)}</h3>
        <p className={styles.time}>{time}</p>
      </div>

      <ul className={styles.list}>
        {descs.map((desc, i) => (
          <li className={styles.itemContainer} key={i}>
            <span className={styles.marker}></span>
            <p className={styles.item}>{t(desc[`desc${i + 1}`])}</p>
          </li>
        ))}
      </ul>

      <img className={styles.img} src={src} alt={title} />
    </div>
  );
}
