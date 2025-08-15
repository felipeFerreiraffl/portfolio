import { useTranslation } from "react-i18next";
import SectionTitle from "../../SectionTitle";

export default function Intro() {
  const { t } = useTranslation();

  return (
    <div>
      <SectionTitle title={t("intro.title")} subtitle={t("intro.subtitle")} />
    </div>
  );
}
