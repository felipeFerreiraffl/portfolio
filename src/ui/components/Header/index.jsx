import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBarsStaggered, FaCircleXmark } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import langSvg from "../../../services/constants/svgs/lang";
import logo from "../../../services/constants/svgs/logo";
import i18n from "../../../services/i18n";
import Divisor from "../Divisor";
import styles from "./style.module.css";
import {
  FaIcnBarsStaggered,
  FaIcnCircleXMark,
} from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";

export default function Header() {
  const { t } = useTranslation("header", { useSuspense: true }); // Tradutor
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false); // Estado do menu aberto

  // Evita rolagem com o menu aberto
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden"; // Bloqueia scroll
    } else {
      document.body.style.overflow = ""; // Ativa novamente o scroll
    }

    return () => (document.body.style.overflow = "");
  }, [openMenu]);

  // Fecha o menu no redimensionamento de tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1080 && openMenu) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [openMenu]);

  return (
    <nav className={styles.header}>
      <a href="/" className={styles["logo-ctn"]}>
        <img
          className={styles["logo-i"]}
          src={logo.mainLogo2}
          alt={t("alts.logo")}
        />
        <p
          aria-label={t("aria-labels.home")}
          href="/"
          className={`${styles.link} ${
            location.pathname === "/" ? styles["home-active"] : ""
          }`}
        >
          Home
        </p>
      </a>
      <div className={styles.pages}>
        <a
          aria-label={t("aria-labels.portfolio")}
          href="/portfolio"
          className={`${styles.link} ${styles.portfolio} ${
            location.pathname === "/portfolio" ? styles.active : ""
          }`}
        >
          {t("pages.portfolio")}
        </a>
        <a
          aria-label={t("aria-labels.hobbies")}
          href="/hobbies"
          className={`${styles.link} ${styles.hobbies} ${
            location.pathname === "/hobbies" ? styles.active : ""
          }`}
        >
          Hobbies
        </a>
        <a
          aria-label={t("aria-labels.contacts")}
          href="/contatos"
          className={`${styles.link} ${styles.contacts} ${
            location.pathname === "/contatos" ? styles.active : ""
          }`}
        >
          {t("pages.contacts")}
        </a>
      </div>
      <div className={styles["lang-ctn"]}>
        <img
          className={`${styles["lang-i"]} ${
            i18n.language === "pt" ? styles.active : ""
          }`}
          src={langSvg.ptBr}
          alt={t("alts.pt-icon")}
          title={t("tradutor.pt-br")}
          onClick={() => i18n.changeLanguage("pt")}
        />
        <img
          className={`${styles["lang-i"]} ${
            i18n.language === "en" ? styles.active : ""
          }`}
          src={langSvg.eng}
          alt={t("alts.en-icon")}
          title={t("tradutor.en")}
          onClick={() => i18n.changeLanguage("en")}
        />
      </div>

      <FaIcnBarsStaggered
        icon={fontAwesome.barsStaggered}
        className={styles["menu-i"]}
        onClick={() => setOpenMenu(true)}
      />

      {openMenu && (
        <>
          <motion.div
            className={`${styles["menu-overlay"]} ${
              openMenu ? styles.show : ""
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenMenu(false)}
            aria-hidden="true"
          ></motion.div>

          <motion.div
            className={styles.menu}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            aria-modal="true"
            aria-label={t("menu")}
            role="dialog"
          >
            <FaIcnCircleXMark
              icon={fontAwesome.circleXMark}
              className={styles["menu-close"]}
              onClick={() => setOpenMenu(false)}
              role="button"
            />

            <div className={styles["menu-lang-ctn"]}>
              <img
                className={`${styles["lang-i"]} ${
                  i18n.language === "pt" ? styles.active : ""
                }`}
                src={langSvg.ptBr}
                alt={t("alts.pt-icon")}
                title={t("tradutor.pt-br")}
                onClick={() => i18n.changeLanguage("pt")}
              />
              <img
                className={`${styles["lang-i"]} ${
                  i18n.language === "en" ? styles.active : ""
                }`}
                src={langSvg.eng}
                alt={t("alts.en-icon")}
                title={t("tradutor.en")}
                onClick={() => i18n.changeLanguage("en")}
              />
            </div>

            <nav>
              <h2 className={styles["nav-ttl"]}>Navegue</h2>

              <div className={styles["menu-pages"]}>
                <a
                  aria-label={t("aria-labels.home")}
                  href="/"
                  className={`${styles.link} ${styles["menu-pg"]} ${
                    location.pathname === "/" ? styles.active : ""
                  }`}
                >
                  Home
                </a>
                <a
                  aria-label={t("aria-labels.portfolio")}
                  href="/portfolio"
                  className={`${styles.link} ${styles["menu-pg"]} ${
                    location.pathname === "/portfolio" ? styles.active : ""
                  }`}
                >
                  {t("pages.portfolio")}
                </a>
                <a
                  aria-label={t("aria-labels.hobbies")}
                  href="/hobbies"
                  className={`${styles.link} ${styles["menu-pg"]} ${
                    location.pathname === "/hobbies" ? styles.active : ""
                  }`}
                >
                  Hobbies
                </a>
                <a
                  aria-label={t("aria-labels.contacts")}
                  href="/contatos"
                  className={`${styles.link} ${styles["menu-pg"]} ${
                    location.pathname === "/contatos" ? styles.active : ""
                  }`}
                >
                  {t("pages.contacts")}
                </a>
              </div>
            </nav>

            <Divisor marginTop={0} color={"var(--main-01)"} />

            <img
              src={logo.mainLogo2}
              alt={t("alts.logo")}
              className={styles["menu-logo"]}
              role="button"
              aria-pressed="false"
            />
          </motion.div>
        </>
      )}
    </nav>
  );
}
