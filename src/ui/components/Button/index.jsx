import styles from "./styles.module.css";

export default function Button({ color, text, active, boxShadow, onClick }) {
  return (
    <button
      className={`${styles.btn}`}
      style={{
        "--btn-color": color,
        "--btn-active": active,
        "--btn-box-shadow": boxShadow,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
