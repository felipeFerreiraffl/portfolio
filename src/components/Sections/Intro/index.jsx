import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import images from "../../../services/utils/jsons/images";
import Info from "./Info";

export default function Intro() {
  const { t: tSection } = useTranslation("sections");
  const { t: tCommon } = useTranslation("common");

  return (
    <div className="section-container" tabIndex={0}>
      <SectionTitle
        title={tSection("intro.title")}
        subtitle={tSection("intro.subtitle")}
      />

      <div className={styles.content}>
        <div className={styles.profileContainer}>
          <div className={`${styles.ring} ${styles.firstRing}`}></div>
          <div className={`${styles.ring} ${styles.secondRing}`}></div>
          <img
            src={images.profile}
            alt={tCommon("alts.profile")}
            title={tCommon("alts.profile")}
            loading="lazy"
          />
        </div>

        <div className={styles.infosContainer}>
          <div className={styles.titleContainer}>
            <h2>Felipe Ferreira Lima</h2>
            <p>{tSection("intro.infos.label")}</p>
          </div>

          <ul>
            <li>
              <Info
                title={tSection("intro.infos.presentation.title")}
                desc={tSection("intro.infos.presentation.desc")}
              />
            </li>
            <li>
              <Info
                title={tSection("intro.infos.hobbies.title")}
                desc={tSection("intro.infos.hobbies.desc")}
              />
            </li>
            <li>
              <Info
                title={tSection("intro.infos.goals.title")}
                desc={tSection("intro.infos.goals.desc")}
              />
            </li>
          </ul>

          <a
            href="/public/archives/dev-curriculum.pdf"
            target="_blank"
            title={tCommon("button_labels.curriculum_vitae")}
            aria-label={tCommon("button_labels.curriculum_vitae")}
          >
            {tCommon("button_labels.curriculum_vitae")}
          </a>
        </div>
      </div>
    </div>
  );
}
