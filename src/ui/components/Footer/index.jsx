import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import links from "../../../services/constants/links/links";
import logo from "../../../services/constants/svgs/logo";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";

export default function Footer({ marginTop }) {
  const { t } = useTranslation("footer", { useSuspense: true });
  const location = useLocation();

  return (
    <footer className={styles.ftr} style={{ marginTop: marginTop }}>
      <motion.div
        className={styles.cont}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={logo.mainLogo2}
          alt={t("footer.logo-alt")}
          className={styles.logo}
          loading="lazy"
        />
        <div className={styles.secCont}>
          <nav className={styles.nav}>
            <h2 className={`${styles.contTtl} ${styles.navTtl}`}>
              {t("footer.nav.title")}
            </h2>
            <div className={styles.pageCtn}>
              <a
                href="/"
                className={`${styles.page} ${
                  location.pathname === "/" ? styles.active : ""
                }`}
                aria-label={t("footer.aria-labels.home")}
                title={t("footer.aria-labels.home")}
              >
                Home
              </a>
              <a
                href="/portfolio"
                className={`${styles.page} ${
                  location.pathname === "/portfolio" ? styles.active : ""
                }`}
                aria-label={t("footer.aria-labels.portfolio")}
                title={t("footer.aria-labels.portfolio")}
              >
                {t("footer.nav.portfolio")}
              </a>
              <a
                href="/hobbies"
                className={`${styles.page} ${
                  location.pathname === "/hobbies" ? styles.active : ""
                }`}
                aria-label={t("footer.aria-labels.hobbies")}
                title={t("footer.aria-labels.hobbies")}
              >
                Hobbies
              </a>
              <a
                href="/contatos"
                className={`${styles.page} ${
                  location.pathname === "/contacts" ? styles.active : ""
                }`}
                aria-label={t("footer.aria-labels.contacts")}
                title={t("footer.aria-labels.contacts")}
              >
                {t("footer.nav.contacts")}
              </a>
            </div>
          </nav>
          <div className={styles.social}>
            <h2 className={`${styles.contTtl} ${styles.socialTtl}`}>
              {t("footer.social")}
            </h2>
            <div className={styles.socialIcnCtn}>
              <a
                className={styles.socialIcn}
                href={links.socialMedias.github}
                target="_blank"
                aria-label={t("footer.aria-labels.github")}
                title={t("footer.aria-labels.github")}
                rel="noopener noreferrer"
              >
                <FaIcon icon={fontAwesome.squareGithub} />
              </a>
              <a
                className={styles.socialIcn}
                href={links.socialMedias.instagram}
                target="_blank"
                aria-label={t("footer.aria-labels.instagram")}
                title={t("footer.aria-labels.instagram")}
                rel="noopener noreferrer"
              >
                <FaIcon icon={fontAwesome.squareInstagram} />
              </a>
              <a
                className={styles.socialIcn}
                href={links.socialMedias.linkedin}
                target="_blank"
                aria-label={t("footer.aria-labels.linkedin")}
                title={t("footer.aria-labels.linkedin")}
                rel="noopener noreferrer"
              >
                <FaIcon icon={fontAwesome.linkedin} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <p className={styles.cptn}>&copy; Felipe Ferreira Lima 2025</p>
    </footer>
  );
}
