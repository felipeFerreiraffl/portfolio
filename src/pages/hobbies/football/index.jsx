import { useTranslation } from "react-i18next";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import bgImgs from "../../../services/constants/imgs/bg";
import headerImgs from "../../../services/constants/imgs/header";
import Header from "../../../ui/components/Header";
import HobbiesIntro from "../../../ui/components/Introduction/Hobbies";
import styles from "./style.module.css";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";

export default function Football() {
  useDocumentTitle("Futebol | Felipe Ferreira");
  const { t } = useTranslation("football", { useSuspense: true });

  return (
    <div className={styles.ctn}>
      <header>
        <Header />

        <HobbiesIntro
          bgImage={headerImgs.football}
          color={"var(--main-02)"}
          border={"var(--bd-line-mn2)"}
          icon={<FaIcon icon={fontAwesome.futbol} />}
          title={t("football.title")}
          titleFont={"var(--fut-h1)"}
          mobTitleFont={"var(--fut-h2)"}
        />
      </header>

      <section className={styles}></section>
    </div>
  );
}
