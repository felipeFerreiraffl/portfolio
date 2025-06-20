import { useTranslation } from "react-i18next";
import FaIcon from "../../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../../services/constants/icns/font-awesome/iconNames";
import { useAnimeMangaData } from "../../../hooks/api/animeManga/useAnimeMangaData";
import Divisor from "../../Divisor";
import AnimesMangasShowcase from "../../Showcase/AnimesMangas";
import HobbyCarousel from "../../Slides/Hobbies/Common";
import styles from "./style.module.css";
import HobbyFinal from "../../HobbyFinal";
import pngImgs from "../../../../services/constants/imgs/pngs";
import { motion } from "framer-motion";

export default function AnimeContent() {
  const { t } = useTranslation("animes-mangas", { useSuspense: true });
  const { popularity, mostScored, sections, isPending, hasError } =
    useAnimeMangaData("animes");

  if (isPending) {
    return console.log("Carregando dados...");
  }

  if (hasError) {
    return console.error("Erro ao buscar dados!");
  }

  return (
    <div className={styles.ctn}>
      <section className={styles.shwc}>
        <AnimesMangasShowcase
          type={"animes"}
          alignItems={"flex-start"}
          flexDirection={"row"}
          title={t("animesMangas.animes.pop.title")}
          desc={t("animesMangas.animes.pop.subtitle")}
          icon={fontAwesome.rankingStar}
          data={Array.isArray(popularity) ? popularity : []}
        />
        <AnimesMangasShowcase
          type={"animes"}
          alignItems={"flex-end"}
          flexDirection={"row-reverse"}
          title={t("animesMangas.animes.best.title")}
          desc={t("animesMangas.animes.best.subtitle")}
          icon={fontAwesome.medal}
          data={Array.isArray(mostScored) ? mostScored : []}
        />
      </section>

      <Divisor marginTop={128} color={"var(--main-02)"} />

      <section className={styles.slideCtn}>
        <HobbyCarousel
          type={"animes"}
          title={t("animesMangas.animes.sections.watchedRecently")}
          font={"var(--anmg-h2)"}
          mbFont={"var(--anmg-h3)"}
          color={"var(--main-02)"}
          borderBtm={"var(--bd-line-mn2)"}
          icon={<FaIcon icon={fontAwesome.clockRotateLeft} />}
          isDataPending={isPending}
          minLoadingTime={3000}
          data={
            Array.isArray(sections.watchedRecently.data)
              ? sections.watchedRecently.data
              : []
          }
        />
        <HobbyCarousel
          type={"animes"}
          title={t("animesMangas.animes.sections.pendent")}
          font={"var(--anmg-h2)"}
          mbFont={"var(--anmg-h3)"}
          color={"var(--main-02)"}
          borderBtm={"var(--bd-line-mn2)"}
          icon={<FaIcon icon={fontAwesome.spinner} />}
          isDataPending={isPending}
          minLoadingTime={3000}
          data={
            Array.isArray(sections.pendent.data) ? sections.pendent.data : []
          }
        />
        <HobbyCarousel
          type={"animes"}
          title={t("animesMangas.animes.sections.favorite")}
          font={"var(--anmg-h2)"}
          mbFont={"var(--anmg-h3)"}
          color={"var(--main-02)"}
          borderBtm={"var(--bd-line-mn2)"}
          icon={<FaIcon icon={fontAwesome.heart} />}
          isDataPending={isPending}
          minLoadingTime={3000}
          data={
            Array.isArray(sections.favorite.data) ? sections.favorite.data : []
          }
        />
      </section>

      <Divisor marginTop={128} color={"var(--main-02)"} />

      <HobbyFinal
        img={pngImgs.anime}
        alt={"Okarun (Dandadan)"}
        font={"var(--anmg-h2)"}
        mbFont={"var(--anmg-h3)"}
        color={"var(--main-02)"}
      />
    </div>
  );
}
