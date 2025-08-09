import { useContext } from "react";
import styles from "./styles.module.css";
import { ThemeContext } from "../../../../services/context/themeContext";

export default function ColorDropdown() {
  const { theme, setColorTheme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.circle} ${styles.light}`}
        onClick={() => setColorTheme("light")}
      ></button>
      <button
        className={`${styles.circle} ${styles.dark}`}
        onClick={() => setColorTheme("dark")}
      ></button>
    </div>
  );
}
