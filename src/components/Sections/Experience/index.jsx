import { useTranslation } from "react-i18next";
import { experiencesData } from "../../../data/data";
import SectionTitle from "../../SectionTitle";
import ExperienceCard from "./ExperienceCard";
import styles from "./styles.module.css";
import { ReactComponent as Altar } from "../../../assets/svgs/illustrations/experiences-altar.svg";

export default function Experience({ ref }) {
  const { t } = useTranslation("sections");

  return (
    <div
      ref={ref}
      className={`section-container ${styles.container}`}
      tabIndex={0}
    >
      <SectionTitle
        title={t("experience.title")}
        subtitle={t("experience.subtitle")}
      />

      {experiencesData.map((data, i) => (
        <ExperienceCard
          key={i}
          title={data.title}
          time={data.date}
          src={data.src}
          srcAlt={data.srcAlt}
          descs={data.descs}
        />
      ))}

      <Altar className={styles.altar} />
    </div>
  );
}
