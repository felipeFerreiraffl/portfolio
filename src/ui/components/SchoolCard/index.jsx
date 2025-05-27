import styles from "./style.module.css";

export default function SchoolCard({ img, name, href }) {
  return (
    <a
      href={href}
      className={styles.ctn}
      target="_blank"
      rel="noopener noreferer"
    >
      <p className={styles.name}>{name}</p>
      <img src={img} alt={name} className={styles.img} />
    </a>
  );
}
