import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import styles from "./styles.module.css";
import Skill from "./Skill";
import icons from "../../../utils/icons";
import { ReactComponent as IconExemple } from "../../../assets/svgs/icons/typescript.svg";

export default function Skills({ ref }) {
  const { t: tSections } = useTranslation("sections");

  return (
    <div ref={ref} className="section-container" tabIndex={0}>
      <SectionTitle
        title={tSections("skills.title")}
        subtitle={tSections("skills.subtitle")}
      />

      <Skill name={"Nome"} icon={<IconExemple fill="rgb(--color-text)" />} />
    </div>
  );
}
