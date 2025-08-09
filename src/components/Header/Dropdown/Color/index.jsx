import { useContext } from "react";
import styles from "./styles.module.css";
import { ThemeContext } from "../../../../services/context/themeContext";

export default function ColorDropdown() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.circle} ${styles.light}`}
        onClick={() => toggleTheme("light")}
      ></button>
      <button
        className={`${styles.circle} ${styles.dark}`}
        onClick={() => toggleTheme("dark")}
      ></button>
    </div>
  );
}
