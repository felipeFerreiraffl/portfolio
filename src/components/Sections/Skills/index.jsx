import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import { skillsData } from "../../../services/utils/jsons/data";
import Slide from "../../Slides/SkillsCarousel/Slide";
import SkillsCarousel from "../../Slides/SkillsCarousel";

export default function Skills() {
  const { t: tSections } = useTranslation("sections");

  return (
    <div className="section-container" tabIndex={0}>
      <SectionTitle
        title={tSections("skills.title")}
        subtitle={tSections("skills.subtitle")}
      />

      <SkillsCarousel />
    </div>
  );
}
