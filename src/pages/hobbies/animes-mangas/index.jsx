import { useTranslation } from "react-i18next";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";
import Header from "../../../ui/components/Header";
import HobbiesIntro from "../../../ui/components/Introduction/Hobbies";
import headerImgs from "../../../services/constants/imgs/header";
import { FaIcnBook } from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";

export default function AnimesMangas() {
  useDocumentTitle("Animes & Mangás | Felipe Ferreira");
  const { t } = useTranslation("animes-mangas", { useSuspense: true });

  return (
    <div className={styles.ctn}>
      <header>
        <Header />

        <HobbiesIntro
          bgImage={headerImgs.animesMangas}
          color={"var(--main-02)"}
          border={"var(--bd-mn2)"}
          icon={<FaIcnBook icon={fontAwesome.book} />}
          title={"Animes & Mangás"}
          titleFont={"var(--anmg-h1)"}
          mobTitleFont={"var(--anmg-h2)"}
        />
      </header>
    </div>
  );
}
