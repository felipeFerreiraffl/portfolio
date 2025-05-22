import styles from "./styles.module.css";

export default function Button({ color, text, active, boxShadow }) {
  return (
    <button
      className={`${styles.btn}`}
      style={{
        "--btn-color": color,
        "--btn-active": active,
        "--btn-box-shadow": boxShadow,
      }}
    >
      {text}
    </button>
  );
}
