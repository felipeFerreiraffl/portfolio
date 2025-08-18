import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import styles from "./styles.module.css";

export default function Skills() {
  const { t: tSections } = useTranslation("sections");

  return (
    <div className={styles}>
      <SectionTitle
        title={tSections("skills.title")}
        subtitle={tSections("skills.subtitle")}
      />
    </div>
  );
}
