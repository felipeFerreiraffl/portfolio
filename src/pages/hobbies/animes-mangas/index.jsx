import { useTranslation } from "react-i18next";
import {
  FaIcnBook,
  FaIcnBookOpenReader,
  FaIcnLanguage,
} from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import headerImgs from "../../../services/constants/imgs/header";
import Header from "../../../ui/components/Header";
import HobbiesIntro from "../../../ui/components/Introduction/Hobbies";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";
import bgImgs from "../../../services/constants/imgs/bg";
import { useState } from "react";

export default function AnimesMangas() {
  useDocumentTitle("Animes & Mangás | Felipe Ferreira");
  const { t } = useTranslation("animes-mangas", { useSuspense: true });

  const [type, setType] = useState("");

  return (
    <div className={styles.ctn}>
      <header>
        <Header />

        <HobbiesIntro
          bgImage={headerImgs.animesMangas}
          color={"var(--main-02)"}
          border={"var(--bd-mn2)"}
          icon={<FaIcnBook icon={fontAwesome.book} />}
          title={t("title")}
          titleFont={"var(--anmg-h1)"}
          mobTitleFont={"var(--anmg-h2)"}
        />
      </header>

      <section className={styles["chs-ctn"]}>
        <h2 className={styles["sec-ttl"]}>{t("choose.title")}</h2>
        <div className={styles["chs-card-ctn"]}>
          <div
            className={`${styles.chs} ${styles.anime}`}
            style={{ backgroundImage: `url(${bgImgs.anime})` }}
            onClick={() => setType("animes")}
            role="button"
          >
            <span className={styles["chs-icn"]}>
              <FaIcnLanguage icon={fontAwesome.language} />
            </span>
            <h3 className={styles["sec-ttl"]}>Animes</h3>
          </div>

          <div
            className={`${styles.chs} ${styles.manga}`}
            style={{ backgroundImage: `url(${bgImgs.manga})` }}
            onClick={() => setType("mangas")}
            role="button"
          >
            <span className={styles["chs-icn"]}>
              <FaIcnBookOpenReader icon={fontAwesome.bookOpenReader} />
            </span>
            <h3 className={styles["sec-ttl"]}>{t("choose.mangas")}</h3>
          </div>
        </div>
      </section>

      
    </div>
  );
}
