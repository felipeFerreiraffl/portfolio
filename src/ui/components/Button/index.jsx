import styles from "./styles.module.css";

export default function Button({ color, text, onClick }) {
  return (
    <button
      className={`${styles.btn}`}
      style={{
        "--btn-color": color,
        "--btn-active":
          color === "var(--main-01)" ? "var(--main-02)" : "var(--main-05)",
        "--btn-box-shadow":
          color === "var(--main-01)"
            ? "var(--bshw-led-mn2)"
            : "var(--bshw-led-mn5)",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
