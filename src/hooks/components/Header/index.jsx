import { useTranslation } from "react-i18next";
import langSvg from "../../../services/const/svgs/lang";
import logo from "../../../services/const/svgs/logo";
import i18n from "../../../services/i18n";
import styles from "./style.module.css";

export default function Header() {
  const { t } = useTranslation("header", { useSuspense: true });

  return (
    <nav className={styles.header}>
      <a href="/" className={styles["logo-ctn"]}>
        <img
          className={styles["logo-i"]}
          src={logo.mainLogo2}
          alt={t("alts.logo")}
        />
        <p className={styles.link}>Home</p>
      </a>
      <div className={styles.pages}>
        <a href="/portfolio" className={`${styles.link} ${styles.portfolio}`}>
          {t("pages.portfolio")}
        </a>
        <a href="/hobbies" className={`${styles.link} ${styles.hobbies}`}>
          Hobbies
        </a>
        <a href="/contatos" className={`${styles.link} ${styles.contacts}`}>
          {t("pages.contacts")}
        </a>
      </div>
      <div className={styles["lang-ctn"]}>
        <img
          className={styles["lang-i"]}
          src={langSvg.ptBr}
          alt={t("alts.pt-icon")}
          title={t("tradutor.pt-br")}
          onClick={() => i18n.changeLanguage("pt")}
        />
        <img
          className={styles["lang-i"]}
          src={langSvg.eng}
          alt={t("alts.en-icon")}
          title={t("tradutor.en")}
          onClick={() => i18n.changeLanguage("en")}
        />
      </div>
    </nav>
  );
}
