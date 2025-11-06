import { useTranslation } from "react-i18next";
import { skillsData } from "../../../data/data";
import SectionTitle from "../../SectionTitle";
import styles from "./styles.module.css";
import Techs from "./Techs";

export default function Skills({ ref }) {
  const { t } = useTranslation("sections");

  const mapped = skillsData.map((data, i) => {
    return data.techs;
  });
  console.log(mapped);

  return (
    <div ref={ref} className="section-container" tabIndex={0}>
      <SectionTitle title={t("skills.title")} subtitle={t("skills.subtitle")} />

      <div className={styles.techsContainer}>
        {skillsData.map((data, i) => (
          <Techs
            key={i}
            title={t(data.title)}
            skills={data.techs}
            alignSelf={(i + 1) % 2 === 0 ? "flex-end" : "flex-start"}
          />
        ))}
      </div>
    </div>
  );
}
