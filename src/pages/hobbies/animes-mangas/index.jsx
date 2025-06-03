import { useState } from "react";
import { useTranslation } from "react-i18next";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import bgImgs from "../../../services/constants/imgs/bg";
import headerImgs from "../../../services/constants/imgs/header";
import Divisor from "../../../ui/components/Divisor";
import Header from "../../../ui/components/Header";
import HobbiesIntro from "../../../ui/components/Introduction/Hobbies";
import AnimesMangasShowcase from "../../../ui/components/Showcase/AnimesMangas";
import HobbyCarousel from "../../../ui/components/Slides/Hobbies/Common";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import { useJikanByFilter } from "../../../ui/hooks/useJikanByFilter";
import styles from "./style.module.css";
import jikanIds from "../../../services/constants/ids/jikanIds";
import { useJikanById } from "../../../ui/hooks/useJikanById";

export default function AnimesMangas() {
  useDocumentTitle("Animes & Mangás | Felipe Ferreira");
  const { t } = useTranslation("animes-mangas", { useSuspense: true });
  const [type, setType] = useState("");

  // Definição dos filtros para mapping
  const filters = [
    { filter: "bypopularity", size: 12, key: "pop" },
    { filter: "", size: 12, key: "score" },
  ];

  const queries = useJikanByFilter({ type, filters });
  const [popularity, mostScored] = queries.map((q) => q.data ?? []);

  const ids = jikanIds.anime.favorites;
  const idsQueries = useJikanById({ type, ids: ids });
  const favoriteAnimes = idsQueries.data;

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

      {type === "animes" && (
        <>
          <section
            className={styles.shwc}
            style={{ "--bg-image": `url(${bgImgs.animeShowcase})` }}
          >
            <AnimesMangasShowcase
              type={type}
              title={t("animes.pop.title")}
              desc={t("animes.pop.subtitle")}
              icon={fontAwesome.rankingStar}
              flexDirection={"row"}
              alignItems={"flex-start"}
              data={popularity}
            />

            <AnimesMangasShowcase
              type={type}
              title={t("animes.best.title")}
              desc={t("animes.best.subtitle")}
              icon={fontAwesome.medal}
              flexDirection={"row-reverse"}
              alignItems={"flex-end"}
              data={mostScored}
            />
          </section>

          <Divisor marginTop={128} color={"var(--main-02)"} />

          <section className={styles}>
            <HobbyCarousel
              type={type}
              title={"Animes"}
              icon={<FaIcon icon={fontAwesome.clockRotateLeft} />}
              color={"var(--main-02)"}
              font={"var(--anmg-h2)"}
              mbFont={"var(--anmg-h3)"}
              borderBtm={"var(--bd-line-mn2)"}
              data={favoriteAnimes}
            />
          </section>
        </>
      )}

      {type === "mangas" && (
        <>
          <section
            className={styles.shwc}
            style={{ "--bg-image": `url(${bgImgs.mangaShowcase})` }}
          >
            <AnimesMangasShowcase
              type={type}
              title={t("mangas.pop.title")}
              desc={t("mangas.pop.subtitle")}
              icon={fontAwesome.rankingStar}
              flexDirection={"row"}
              alignItems={"flex-start"}
              data={popularity}
            />

            <AnimesMangasShowcase
              type={type}
              title={t("mangas.best.title")}
              desc={t("mangas.best.subtitle")}
              icon={fontAwesome.medal}
              flexDirection={"row-reverse"}
              alignItems={"flex-end"}
              data={mostScored}
            />
          </section>

          <Divisor marginTop={128} color={"var(--main-02)"} />
        </>
      )}
    </div>
  );
}
