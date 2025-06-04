import { useState } from "react";
import { useTranslation } from "react-i18next";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import bgImgs from "../../../services/constants/imgs/bg";
import headerImgs from "../../../services/constants/imgs/header";
import Header from "../../../ui/components/Header";
import HobbiesIntro from "../../../ui/components/Introduction/Hobbies";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";
import AnimeContent from "../../../ui/components/Content/AnimeContent";

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
          icon={<FaIcon icon={fontAwesome.book} />}
          title={t("title")}
          titleFont={"var(--anmg-h1)"}
          mobTitleFont={"var(--anmg-h2)"}
        />
      </header>

      <section className={styles["chs-ctn"]}>
        <h2 className={styles["sec-ttl"]}>{t("choose.title")}</h2>
        <div className={styles["chs-card-ctn"]}>
          <div
            className={`${styles.chs} ${styles.anime} ${
              type === "animes" ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${bgImgs.anime})` }}
            onClick={() => setType("animes")}
            role="button"
          >
            <span className={styles["chs-icn"]}>
              <FaIcon icon={fontAwesome.language} />
            </span>
            <h3 className={styles["sec-ttl"]}>Animes</h3>
          </div>

          <div
            className={`${styles.chs} ${styles.manga} ${
              type === "mangas" ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${bgImgs.manga})` }}
            onClick={() => setType("mangas")}
            role="button"
          >
            <span className={styles["chs-icn"]}>
              <FaIcon icon={fontAwesome.bookOpenReader} />
            </span>
            <h3 className={styles["sec-ttl"]}>{t("choose.mangas")}</h3>
          </div>
        </div>
      </section>

      {type === "animes" && <AnimeContent />}
    </div>
  );
}
