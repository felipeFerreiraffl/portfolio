import { useTranslation } from "react-i18next";
import {
  FaIcnLinkedin,
  FaIcnSquareGithub,
  FaIcnSquareInstagram,
} from "../../../services/constants/icns/fontAwesome";
import styles from "./styles.module.css";
import logo from "../../../services/constants/svgs/logo";
import { useNavigate } from "react-router-dom";
import links from "../../../services/constants/links/links";

export default function Footer() {
  const navigate = useNavigate();
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
          <nav className={styles.nav}>
            <h5 className={`${styles["cont-ttl"]} ${styles["nav-ttl"]}`}>
              {t("nav.title")}
            </h5>
            <div className={styles["page-ctn"]}>
              <a href="/" className={styles.page}>
                Home
              </a>
              <a href="/portfolio" className={styles.page}>
                {t("nav.portfolio")}
              </a>
              <a href="/hobbies" className={styles.page}>
                Hobbies
              </a>
              <a href="/contatos" className={styles.page}>
                {t("nav.contacts")}
              </a>
            </div>
          </nav>
          <div className={styles.social}>
            <h5 className={`${styles["cont-ttl"]} ${styles["social-ttl"]}`}>
              {t("social")}
            </h5>
            <div className={styles["social-icn-ctn"]}>
              <a href={links.socialMedias.github} target="_blank">
                <FaIcnSquareGithub className={styles["social-icn"]} />
              </a>
              <a href={links.socialMedias.instagram} target="_blank">
                <FaIcnSquareInstagram className={styles["social-icn"]} />
              </a>
              <a href={links.socialMedias.linkedin} target="_blank">
                <FaIcnLinkedin className={styles["social-icn"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.cptn}>&copy; Felipe Ferreira Lima 2025</p>
    </footer>
  );
}
