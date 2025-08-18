import Tech from "../Tech";
import styles from "./styles.module.css";

export default function Slide({
  title,
  src,
  alt,
  techs = [],
  techName,
  techIcon,
}) {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.content}>
        <img src={src} alt={alt} />
        <div className={styles}>
          {techs.map((_, i) => (
            <Tech key={i} icon={techIcon} name={techName} />
          ))}
        </div>
      </div>
    </div>
  );
}
