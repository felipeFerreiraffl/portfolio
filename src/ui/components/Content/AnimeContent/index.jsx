import { useTranslation } from "react-i18next";
import { useAnimeMangaData } from "../../../hooks/api/animeManga/useAnimeMangaData";
import AnimesMangasShowcase from "../../Showcase/AnimesMangas";
import styles from "./style.module.css";
import fontAwesome from "../../../../services/constants/icns/font-awesome/iconNames";

export default function AnimeContent() {
  const { t } = useTranslation("animes-mangas", { useSuspense: true });
  const { popularity, mostScored, sections, isPending, hasError } =
    useAnimeMangaData("animes");

  if (isPending) {
    return <div>Carregando...</div>;
  }

  if (hasError) {
    return <div>Erro ao carregar dados</div>;
  }

  return (
    <div className={styles.ctn}>
      <section className={styles.shwc}>
        <AnimesMangasShowcase
          type={"animes"}
          alignItems={"flex-start"}
          flexDirection={"row"}
          title={t("animes.pop.title")}
          desc={t("animes.pop.subtitle")}
          icon={fontAwesome.rankingStar}
          data={Array.isArray(popularity) ? popularity : []}
        />
        <AnimesMangasShowcase
          type={"animes"}
          alignItems={"flex-end"}
          flexDirection={"row-reverse"}
          title={t("animes.best.title")}
          desc={t("animes.best.subtitle")}
          icon={fontAwesome.medal}
          data={Array.isArray(mostScored) ? mostScored : []}
        />
      </section>
    </div>
  );
}
