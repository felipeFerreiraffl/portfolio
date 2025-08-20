import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";
import styles from "./styles.module.css";

export default function Contacts() {
  const { t: tSections } = useTranslation("sections");

  return (
    <div className="section-container">
      <SectionTitle
        title={tSections("contacts.title")}
        subtitle={tSections("contacts.subtitle")}
      />
    </div>
  );
}
