import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import { projectsData } from "../../../services/utils/jsons/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { t: tSections } = useTranslation("sections");

  return (
    <div className="section-container">
      <SectionTitle
        title={tSections("projects.title")}
        subtitle={tSections("projects.subtitle")}
      />

      {projectsData.map((proj, i) => (
        <ProjectCard
          key={i}
          title={proj.title}
          src={proj.imgSrc}
          techs={proj.techs}
        />
      ))}
    </div>
  );
}
