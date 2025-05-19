import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBarsStaggered, FaCircleXmark } from "react-icons/fa6";
import langSvg from "../../../services/const/svgs/lang";
import logo from "../../../services/const/svgs/logo";
import i18n from "../../../services/i18n";
import Divisor from "../Divisor";
import styles from "./style.module.css";
import { Helmet } from "react-helmet";

export default function Header() {
  const { t } = useTranslation("header", { useSuspense: true });
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
        <>
          <motion.div
            className={`${styles["menu-overlay"]} ${
              openMenu ? styles.show : ""
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenMenu(false)}
          ></motion.div>

          <motion.div
            className={styles.menu}
            initial={{ transform: "translateX(100%)" }}
            animate={{ transform: "translateX(0%)" }}
            exit={{ transform: "translateX(100%)" }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        </>
      )}
    </nav>
  );
}
