import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import styles from "./styles.module.css";
import ExperienceCard from "./ExperienceCard";
import images from "../../../utils/images";
import { experiencesData } from "../../../data/data";

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
          descs={data.descs}
        />
      ))}
    </div>
  );
}
