import { useContext } from "react";
import styles from "./styles.module.css";
import { ThemeContext } from "../../../../services/context/themeContext";

export default function ColorDropdown() {
  const { theme, setColorTheme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.circle} ${styles.light} ${
          theme === "light" ? styles.active : ""
        }`}
        onClick={() => setColorTheme("light")}
      ></button>
      <button
        className={`${styles.circle} ${styles.dark} ${
          theme === "dark" ? styles.active : ""
        }`}
        onClick={() => setColorTheme("dark")}
      ></button>
    </div>
  );
}
