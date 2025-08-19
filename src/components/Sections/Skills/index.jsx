import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import { skillsData } from "../../../services/utils/jsons/data";
import Slide from "../../Slides/SkillsCarousel/Slide";

export default function Skills() {
  const { t: tSections } = useTranslation("sections");

  return (
    <div className="section-container" tabIndex={0}>
      <SectionTitle
        title={tSections("skills.title")}
        subtitle={tSections("skills.subtitle")}
      />

      {skillsData.map((skill, i) => (
        <Slide
          key={i}
          title={tSections(skill.title)}
          src={skill.imgSrc}
          alt={skill.title}
          techs={skill.techs}
        />
      ))}
      {/* <LocalIcon icon={icons.local.mongodb} alt={"MongoDB"} /> */}
    </div>
  );
}
