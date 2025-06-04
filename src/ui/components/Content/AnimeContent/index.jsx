import { useTranslation } from "react-i18next";
import { useAnimeMangaData } from "../../../hooks/api/animeManga/useAnimeMangaData";
import AnimesMangasShowcase from "../../Showcase/AnimesMangas";
import styles from "./style.module.css";
import fontAwesome from "../../../../services/constants/icns/font-awesome/iconNames";

export default function AnimeContent() {
  const { t } = useTranslation("animes-mangas", { useSuspense: true });
  const { popularity, mostScored, sections } = useAnimeMangaData("animes");

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
          data={popularity}
        />
        <AnimesMangasShowcase
          type={"animes"}
          alignItems={"flex-end"}
          flexDirection={"row-reverse"}
          title={t("animes.best.title")}
          desc={t("animes.best.subtitle")}
          icon={fontAwesome.medal}
          data={mostScored}
        />
      </section>
    </div>
  );
}
