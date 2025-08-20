import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className={styles.footer}>
      <h2>{t("footer")}</h2>
      <p>Felipe Ferreira Lima &copy; Copyright 2025</p>
    </footer>
  );
}
