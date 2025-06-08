import { useTranslation } from "react-i18next";
import FaIcon from "../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../services/constants/icns/font-awesome/iconNames";
import bgImgs from "../../services/constants/imgs/bg";
import headerImgs from "../../services/constants/imgs/header";
import Header from "../../ui/components/Header";
import HobbyPage from "../../ui/components/HobbyPage";
import CommonIntro from "../../ui/components/Introduction/Common";
import useDocumentTitle from "../../ui/hooks/useDocumentTitle";
import styles from "./styles.module.css";

export default function Hobbies() {
  useDocumentTitle("Hobbies | Felipe Ferreira");
  const { t } = useTranslation("hobbies", { useSuspense: true });

  return (
    <div className={styles.ctn}>
      <header>
        <Header />

        <CommonIntro
          bgImage={headerImgs.hobbies}
          color={"var(--main-05)"}
          icon={<FaIcon icon={fontAwesome.umbrellaBeach} />}
          title={"Hobbies"}
          subtitle={t("hobbies.intro.subtitle")}
        />
      </header>

      <div className={styles.routesCtn}>
        <HobbyPage
          bgImage={bgImgs.animesMangas}
          color={"var(--main-02)"}
          icon={<FaIcon icon={fontAwesome.book} />}
          border={"var(--bd-mn2)"}
          title={t("hobbies.hobbie-pages.anime-manga.title")}
          ttlFont={"var(--anmg-h2)"}
          mobTtlFont={"var(--anmg-h3)"}
          desc={t("hobbies.hobbie-pages.anime-manga.description")}
          descFont={"var(--anmg-subttl)"}
          href={"/hobbies/animes-mangas"}
        />
        <HobbyPage
          bgImage={bgImgs.games}
          color={"var(--main-05)"}
          icon={<FaIcon icon={fontAwesome.gamepad} />}
          border={"var(--bd-mn5)"}
          title={t("hobbies.hobbie-pages.games.title")}
          ttlFont={"var(--gm-h2)"}
          mobTtlFont={"var(--gm-h3)"}
          desc={t("hobbies.hobbie-pages.games.description")}
          descFont={"var(--gm-subttl)"}
          href={"/hobbies/games"}
        />
        <HobbyPage
          bgImage={bgImgs.football}
          color={"var(--main-02)"}
          icon={<FaIcon icon={fontAwesome.futbol} />}
          border={"var(--bd-mn2)"}
          title={t("hobbies.hobbie-pages.football.title")}
          ttlFont={"var(--fut-h2)"}
          mobTtlFont={"var(--fut-h3)"}
          desc={t("hobbies.hobbie-pages.football.description")}
          descFont={"var(--fut-subttl)"}
          href={"/hobbies/football"}
        />
        <HobbyPage
          bgImage={bgImgs.drawings}
          color={"var(--main-05)"}
          icon={<FaIcon icon={fontAwesome.paintbrush} />}
          border={"var(--bd-mn5)"}
          title={t("hobbies.hobbie-pages.drawings.title")}
          ttlFont={"var(--draw-h2)"}
          mobTtlFont={"var(--draw-h3)"}
          desc={t("hobbies.hobbie-pages.drawings.description")}
          descFont={"var(--draw-subttl)"}
          href={"/hobbies/drawings"}
        />
      </div>
    </div>
  );
}
