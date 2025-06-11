import styles from "./styles.module.css";

export default function MainButton({
  type,
  color,
  text,
  href,
  onClick,
  title,
}) {
  return (
    <a
      href={href}
      target={type === "external" ? "_blank" : ""}
      rel="noopener noreferer"
      className={`${styles.btn}`}
      title={title}
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
      role="button"
      tabIndex={0}
    >
      {text}
    </a>
  );
}
