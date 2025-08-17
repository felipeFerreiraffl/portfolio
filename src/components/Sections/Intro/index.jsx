import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";

export default function Intro() {
  const { t } = useTranslation("sections");

  return (
    <div className={styles.container}>
      <SectionTitle title={t("intro.title")} subtitle={t("intro.subtitle")} />
    </div>
  );
}
