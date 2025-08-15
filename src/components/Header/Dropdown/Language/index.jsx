import styles from "./styles.module.css";
import i18n from "../../../../services/i18n";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageDropdown() {
  const [language, setLanguage] = useState(i18n.language); // Define o estado inicial (detectado automaticamente)
  const { t } = useTranslation();

  // Define o idioma atual quando o componente é montado
  useEffect(() => {
    const onLanguageChange = (lng) => setLanguage(lng);
    i18n.on("languageChanged", onLanguageChange);
    return () => i18n.off("languageChanged", onLanguageChange);
  }, []);

  // Altera a linguagem do site
  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${language === "pt-BR" ? styles.active : ""}`}
        onClick={() => handleChangeLanguage("pt-BR")}
        title={t("header.aria.ptBr")}
        aria-label={t("header.aria.ptBr")}
        tabIndex={0}
      >
        Por
      </button>
      <span></span>
      <button
        className={`${language === "en" ? styles.active : ""}`}
        onClick={() => handleChangeLanguage("en")}
        title={t("header.aria.en")}
        aria-label={t("header.aria.en")}
        tabIndex={0}
      >
        Eng
      </button>
    </div>
  );
}
