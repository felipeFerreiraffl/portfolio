import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  getAnimeByFilter,
  getMangaByFilter,
} from "../../../services/api/jikan";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import bgImgs from "../../../services/constants/imgs/bg";
import headerImgs from "../../../services/constants/imgs/header";
import Header from "../../../ui/components/Header";
import HobbiesIntro from "../../../ui/components/Introduction/Hobbies";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";
import AnimesMangasShowcase from "../../../ui/components/Showcase/AnimesMangas";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";

export default function AnimesMangas() {
  useDocumentTitle("Animes & Mangás | Felipe Ferreira");
  const { t } = useTranslation("animes-mangas", { useSuspense: true });

  // Busca dos mais populares (anime = 0, mangá = 1)
  const popularityQueries = useQueries({
    queries: [
      {
        queryKey: ["animes-pop", "bypopularity", 12],
        queryFn: () => getAnimeByFilter("bypopularity", 12),
        staleTime: 1000 * 60 * 5,
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      },
      {
        queryKey: ["mangas-pop", "bypopularity", 12],
        queryFn: () => getMangaByFilter("bypopularity", 12),
        staleTime: 1000 * 60 * 5,
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      },
    ],
  });

  // Busca dos mais bem avaliados (anime = 0, mangá = 1)
  const mostScoredQueries = useQueries({
    queries: [
      {
        queryKey: ["animes-pop", 12],
        queryFn: () => getAnimeByFilter("", 12),
        staleTime: 1000 * 60 * 5,
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      },
      {
        queryKey: ["mangas-pop", 12],
        queryFn: () => getMangaByFilter("", 12),
        staleTime: 1000 * 60 * 5,
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      },
    ],
  });

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
            className={`${styles.chs} ${styles.anime}`}
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
            className={`${styles.chs} ${styles.manga}`}
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
              type={"anime"}
              title={t("animes.pop.title")}
              desc={t("animes.pop.subtitle")}
              icon={fontAwesome.rankingStar}
              flexDirection={"row"}
              alignItems={"flex-start"}
              data={popularityQueries[0].data}
            />

            <AnimesMangasShowcase
              type={"anime"}
              title={t("animes.best.title")}
              desc={t("animes.best.subtitle")}
              icon={fontAwesome.medal}
              flexDirection={"row-reverse"}
              alignItems={"flex-end"}
              data={mostScoredQueries[0].data}
            />
          </section>
        </>
      )}
    </div>
  );
}
