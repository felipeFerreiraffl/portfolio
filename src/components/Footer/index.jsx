import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import { scrollToSection } from "../../utils/hooks/global/scrollToSection";
import images from "../../utils/images";

export default function Footer({ sectionRefs }) {
  const { t } = useTranslation("common");

  return (
    <footer className={styles.footer}>
      <div className={styles}>
        <div className={styles}>
          <h2 className={styles}>{t("footer")}</h2>

          <nav className={styles}>
            <ul>
              <li>
                <a
                  href="#"
                  className={styles}
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
                  className={styles}
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
                  className={styles}
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
                  className={styles}
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
                  className={styles}
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
          <span className={styles}>Copyright &copy; 2025</span>
        </div>
      </div>

      <div className={styles}>
        <div className={styles}>
          <div className={styles}></div>
        </div>

        <img
          src={images.statue}
          alt={t("alts.statue")}
          className={styles}
          title={t("alts.statue")}
          aria-label={t("alts.statue")}
          loading="lazy"
        />
      </div>
    </footer>
  );
}
