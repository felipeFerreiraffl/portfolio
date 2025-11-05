import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import images from "../../../utils/images";
import Info from "./Info";

export default function Intro({ ref }) {
  const { t: tSection } = useTranslation("sections");
  const { t: tCommon } = useTranslation("common");

  return (
    <div
      ref={ref}
      className={`section-container ${styles.container}`}
      tabIndex={0}
    >
      <SectionTitle
        title={tSection("intro.title")}
        subtitle={tSection("intro.subtitle")}
      />

      <div className={styles.content}>
        <div className={styles.profileContainer}>
          <div className={`${styles.ring} ${styles.firstRing}`}></div>
          <div className={`${styles.ring} ${styles.secondRing}`}></div>
          <div className={styles.orbitDot}>
            <span className={styles.dot}></span>
          </div>
          <img
            className={styles.pic}
            src={images.profile}
            alt={tCommon("alts.profile")}
            title={tCommon("alts.profile")}
            loading="lazy"
          />
        </div>

        <div className={styles.infosContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.name}>Felipe Ferreira Lima</h2>
            <p className={styles.function}>{tSection("intro.infos.label")}</p>
          </div>

          <ul className={styles.list}>
            <Info
              title={tSection("intro.infos.presentation.title")}
              desc={tSection("intro.infos.presentation.desc")}
            />
            <Info
              title={tSection("intro.infos.hobbies.title")}
              desc={tSection("intro.infos.hobbies.desc")}
            />
            <Info
              title={tSection("intro.infos.goals.title")}
              desc={tSection("intro.infos.goals.desc")}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
