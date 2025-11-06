import { useTranslation } from "react-i18next";
import { ReactComponent as IconExemple } from "../../../assets/svgs/icons/typescript.svg";
import SectionTitle from "../../SectionTitle";
import Skill from "./Skill";

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
