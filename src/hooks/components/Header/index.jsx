import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBarsStaggered, FaCircleXmark } from "react-icons/fa6";
import langSvg from "../../../services/const/svgs/lang";
import logo from "../../../services/const/svgs/logo";
import i18n from "../../../services/i18n";
import styles from "./style.module.css";
import Divisor from "../Divisor";

export default function Header() {
  const { t } = useTranslation("header", { useSuspense: true });
  const [openMenu, setOpenMenu] = useState(false);

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

      <FaBarsStaggered
        className={styles["menu-i"]}
        onClick={() => setOpenMenu(true)}
      />

      {openMenu && (
        <div className={styles.menu}>
          <div className={styles["menu-overlay"]}></div>
          <FaCircleXmark
            className={styles["menu-close"]}
            onClick={() => setOpenMenu(false)}
          />
          <div className={styles["menu-lang-ctn"]}>
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

          <nav>
            <h2 className={styles["nav-ttl"]}>Navegue</h2>
            <div className={styles["menu-pages"]}>
              <a href="/" className={`${styles.link} ${styles["menu-pg"]}`}>
                Home
              </a>
              <a
                href="/portfolio"
                className={`${styles.link} ${styles["menu-pg"]}`}
              >
                {t("pages.portfolio")}
              </a>
              <a
                href="/hobbies"
                className={`${styles.link} ${styles["menu-pg"]}`}
              >
                Hobbies
              </a>
              <a
                href="/contatos"
                className={`${styles.link} ${styles["menu-pg"]}`}
              >
                {t("pages.contacts")}
              </a>
            </div>
          </nav>

          <Divisor marginTop={0} color={"var(--main-01)"} />

          <img src={logo.mainLogo2} alt="" className={styles["menu-logo"]} />
        </div>
      )}
    </nav>
  );
}
