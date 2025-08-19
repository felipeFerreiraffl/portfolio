import Tech from "../Tech";
import styles from "./styles.module.css";

export default function Slide({ title, src, alt, techs = [] }) {
  return (
    <div className={styles.container} tabIndex={0}>
      <h3>{title}</h3>

      <div className={styles.content}>
        <img src={src} alt={alt} loading="lazy" title={alt} aria-label={alt} />

        <div className={styles.techsContainer}>
          {techs.map((tech, i) => (
            <Tech key={i} icon={tech.techIcon} name={tech.techName} />
          ))}
        </div>
      </div>
    </div>
  );
}
