import { useTranslation } from "react-i18next";
import FaIcon from "../../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../../services/constants/icns/font-awesome/iconNames";
import { useAnimeMangaData } from "../../../hooks/api/animeManga/useAnimeMangaData";
import Divisor from "../../Divisor";
import AnimesMangasShowcase from "../../Showcase/AnimesMangas";
import HobbyCarousel from "../../Slides/Hobbies/Common";
import styles from "./style.module.css";
import pngImgs from "../../../../services/constants/imgs/pngs";
import HobbyFinal from "../../HobbyFinal";

export default function MangaContent() {
  const { t } = useTranslation("animes-mangas", { useSuspense: true });
  const { popularity, mostScored, sections, isPending, hasError } =
    useAnimeMangaData("mangas");

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
          type={"mangas"}
          alignItems={"flex-start"}
          flexDirection={"row"}
          title={t("animesMangas.mangas.pop.title")}
          desc={t("animesMangas.mangas.pop.subtitle")}
          icon={fontAwesome.rankingStar}
          data={Array.isArray(popularity) ? popularity : []}
        />
        <AnimesMangasShowcase
          type={"mangas"}
          alignItems={"flex-end"}
          flexDirection={"row-reverse"}
          title={t("animesMangas.mangas.best.title")}
          desc={t("animesMangas.mangas.best.subtitle")}
          icon={fontAwesome.medal}
          data={Array.isArray(mostScored) ? mostScored : []}
        />
      </section>

      <Divisor marginTop={128} color={"var(--main-02)"} />

      <section className={styles.slideCtn}>
        <HobbyCarousel
          type={"mangas"}
          title={t("animesMangas.mangas.sections.finished")}
          font={"var(--anmg-h2)"}
          mbFont={"var(--anmg-h3)"}
          color={"var(--main-02)"}
          borderBtm={"var(--bd-line-mn2)"}
          icon={<FaIcon icon={fontAwesome.clockRotateLeft} />}
          isDataPending={isPending}
          minLoadingTime={3000}
          data={
            Array.isArray(sections.finished.data) ? sections.finished.data : []
          }
        />
        <HobbyCarousel
          type={"mangas"}
          title={t("animesMangas.mangas.sections.readingNow")}
          font={"var(--anmg-h2)"}
          mbFont={"var(--anmg-h3)"}
          color={"var(--main-02)"}
          borderBtm={"var(--bd-line-mn2)"}
          icon={<FaIcon icon={fontAwesome.spinner} />}
          isDataPending={isPending}
          minLoadingTime={3000}
          data={
            Array.isArray(sections.readingNow.data)
              ? sections.readingNow.data
              : []
          }
        />
        <HobbyCarousel
          type={"mangas"}
          title={t("animesMangas.mangas.sections.favorite")}
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
        img={pngImgs.manga}
        alt={"Marin Kitagawa (Sono Bisque Doll wa Suru)"}
        font={"var(--anmg-h2)"}
        mbFont={"var(--anmg-h3)"}
        color={"var(--main-02)"}
      />
    </div>
  );
}
