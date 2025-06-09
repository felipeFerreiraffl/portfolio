import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import links from "../../../services/constants/links/links";
import logo from "../../../services/constants/svgs/logo";
import styles from "./styles.module.css";

export default function Footer({ marginTop }) {
  const { t } = useTranslation("footer", { useSuspense: true });

  return (
    <footer className={styles.ftr} style={{ marginTop: marginTop }}>
      <div className={styles.cont}>
        <img
          src={logo.mainLogo2}
          alt={t("footer.logo-alt")}
          className={styles.logo}
          loading="lazy"
        />
        <div className={styles.secCont}>
          <motion.nav
            className={styles.nav}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className={`${styles.contTtl} ${styles.navTtl}`}>
              {t("footer.nav.title")}
            </h2>
            <div className={styles.pageCtn}>
              <a
                href="/"
                className={styles.page}
                aria-label={t("footer.aria-labels.home")}
                title={t("footer.aria-labels.home")}
              >
                Home
              </a>
              <a
                href="/portfolio"
                className={styles.page}
                aria-label={t("footer.aria-labels.portfolio")}
                title={t("footer.aria-labels.portfolio")}
              >
                {t("footer.nav.portfolio")}
              </a>
              <a
                href="/hobbies"
                className={styles.page}
                aria-label={t("footer.aria-labels.hobbies")}
                title={t("footer.aria-labels.hobbies")}
              >
                Hobbies
              </a>
              <a
                href="/contatos"
                className={styles.page}
                aria-label={t("footer.aria-labels.contacts")}
                title={t("footer.aria-labels.contacts")}
              >
                {t("footer.nav.contacts")}
              </a>
            </div>
          </motion.nav>
          <motion.div
            className={styles.social}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className={`${styles.contTtl} ${styles.socialTtl}`}>
              {t("footer.social")}
            </h2>
            <div className={styles.socialIcnCtn}>
              <a
                href={links.socialMedias.github}
                target="_blank"
                aria-label={t("footer.aria-labels.github")}
                title={t("footer.aria-labels.github")}
                rel="noopener noreferrer"
              >
                <FaIcon
                  icon={fontAwesome.squareGithub}
                  className={styles.socialIcn}
                />
              </a>
              <a
                href={links.socialMedias.instagram}
                target="_blank"
                aria-label={t("footer.aria-labels.instagram")}
                title={t("footer.aria-labels.instagram")}
                rel="noopener noreferrer"
              >
                <FaIcon
                  icon={fontAwesome.squareInstagram}
                  className={styles.socialIcn}
                />
              </a>
              <a
                href={links.socialMedias.linkedin}
                target="_blank"
                aria-label={t("footer.aria-labels.linkedin")}
                title={t("footer.aria-labels.linkedin")}
                rel="noopener noreferrer"
              >
                <FaIcon
                  icon={fontAwesome.linkedin}
                  className={styles.socialIcn}
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
