import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";

export default function Projects() {
  const { t: tSections } = useTranslation("sections");

  return (
    <div className="section-container">
      <SectionTitle
        title={tSections("projects.title")}
        subtitle={tSections("projects.subtitle")}
      />
    </div>
  );
}
