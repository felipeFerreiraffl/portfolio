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
          <div className={styles.itemContainer}>
            <span className={styles.marker}></span>
            <li className={styles.item} key={i}>
              {t(desc[`desc${i + 1}`])}
            </li>
          </div>
        ))}
      </ul>

      <img className={styles.img} src={src} alt={title} />
    </div>
  );
}
