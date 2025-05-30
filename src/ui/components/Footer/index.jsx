import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import links from "../../../services/constants/links/links";
import logo from "../../../services/constants/svgs/logo";
import styles from "./styles.module.css";

export default function Footer() {
  const { t } = useTranslation("footer", { useSuspense: true });

  return (
    <footer className={styles.ftr}>
      <div className={styles.cont}>
        <img
          src={logo.mainLogo2}
          alt={t("logo-alt")}
          className={styles.logo}
          loading="lazy"
        />
        <div className={styles["sec-cont"]}>
          <motion.nav
            className={styles.nav}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className={`${styles["cont-ttl"]} ${styles["nav-ttl"]}`}>
              {t("nav.title")}
            </h2>
            <div className={styles["page-ctn"]}>
              <a
                href="/"
                className={styles.page}
                aria-label={t("aria-labels.home")}
              >
                Home
              </a>
              <a
                href="/portfolio"
                className={styles.page}
                aria-label={t("aria-labels.portfolio")}
              >
                {t("nav.portfolio")}
              </a>
              <a
                href="/hobbies"
                className={styles.page}
                aria-label={t("aria-labels.hobbies")}
              >
                Hobbies
              </a>
              <a
                href="/contatos"
                className={styles.page}
                aria-label={t("aria-labels.contacts")}
              >
                {t("nav.contacts")}
              </a>
            </div>
          </motion.nav>
          <motion.div
            className={styles.social}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className={`${styles["cont-ttl"]} ${styles["social-ttl"]}`}>
              {t("social")}
            </h2>
            <div className={styles["social-icn-ctn"]}>
              <a
                href={links.socialMedias.github}
                target="_blank"
                aria-label={t("aria-labels.github")}
                rel="noopener noreferrer"
              >
                <FaIcon
                  icon={fontAwesome.squareGithub}
                  className={styles["social-icn"]}
                />
              </a>
              <a
                href={links.socialMedias.instagram}
                target="_blank"
                aria-label={t("aria-labels.instagram")}
                rel="noopener noreferrer"
              >
                <FaIcon
                  icon={fontAwesome.squareInstagram}
                  className={styles["social-icn"]}
                />
              </a>
              <a
                href={links.socialMedias.linkedin}
                target="_blank"
                aria-label={t("aria-labels.linkedin")}
                rel="noopener noreferrer"
              >
                <FaIcon
                  icon={fontAwesome.linkedin}
                  className={styles["social-icn"]}
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <p className={styles.cptn}>&copy; Felipe Ferreira Lima 2025</p>
    </footer>
  );
}
