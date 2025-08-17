import { useContext } from "react";
import styles from "./styles.module.css";
import { ThemeContext } from "../../../../services/context/themeContext";
import { useTranslation } from "react-i18next";

export default function ColorDropdown() {
  const { theme, setColorTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <button
        className={`${styles.circle} ${styles.light} ${
          theme === "light" ? styles.active : ""
        }`}
        onClick={() => setColorTheme("light")}
        title={t("tooltip.light")}
        aria-label={t("tooltip.light")}
        tabIndex={0}
      ></button>
      <button
        className={`${styles.circle} ${styles.dark} ${
          theme === "dark" ? styles.active : ""
        }`}
        onClick={() => setColorTheme("dark")}
        title={t("tooltip.dark")}
        aria-label={t("tooltip.dark")}
        tabIndex={0}
      ></button>
    </div>
  );
}
