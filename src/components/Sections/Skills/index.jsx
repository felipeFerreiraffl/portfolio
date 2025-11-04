import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";

export default function Skills({ ref }) {
  const { t: tSections } = useTranslation("sections");

  return (
    <div ref={ref} className="section-container" tabIndex={0}>
      <SectionTitle
        title={tSections("skills.title")}
        subtitle={tSections("skills.subtitle")}
      />
    </div>
  );
}
