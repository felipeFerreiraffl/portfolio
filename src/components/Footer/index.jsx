import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import { scrollToSection } from "../../utils/hooks/global/scrollToSection";
import images from "../../utils/images";

export default function Footer({ sectionRefs }) {
  const { t } = useTranslation("common");

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contentBackgroundContainer}>
          <div className={styles.contentRing1}></div>
          <div className={styles.contentRing2}></div>
          <div className={styles.contentCircle}></div>
        </div>

        <div className={styles.navigation}>
          <h2 className={styles.navTitle}>{t("footer")}</h2>

          <nav>
            <ul className={styles.sectionContainer}>
              <li>
                <a
                  href="#"
                  className={styles.section}
                  title={"Intro"}
                  aria-label={"Intro"}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionRefs.intro);
                  }}
                >
                  Intro
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={styles.section}
                  title={t("navbar.experiences")}
                  aria-label={t("navbar.experiences")}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionRefs.experiences);
                  }}
                >
                  {t("navbar.experiences")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={styles.section}
                  title={t("navbar.skills")}
                  aria-label={t("navbar.skills")}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionRefs.skills);
                  }}
                >
                  {t("navbar.skills")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={styles.section}
                  title={t("navbar.projects")}
                  aria-label={t("navbar.projects")}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionRefs.projects);
                  }}
                >
                  {t("navbar.projects")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={styles.section}
                  title={t("navbar.contacts")}
                  aria-label={t("navbar.contacts")}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionRefs.contacts);
                  }}
                >
                  {t("navbar.contacts")}
                </a>
              </li>
            </ul>
          </nav>
          <span className={styles.copyright}>Copyright &copy; 2025</span>
        </div>
      </div>

      <div className={styles.illustration}>
        <div className={styles.illustationBackgroundContainer}>
          <div className={styles.illustationCircle}></div>
        </div>

        <img
          src={images.statue}
          alt={t("alts.statue")}
          className={styles.image}
          title={t("alts.statue")}
          aria-label={t("alts.statue")}
          loading="lazy"
        />
      </div>
    </footer>
  );
}
