import { useTranslation } from "react-i18next";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import headerImgs from "../../../services/constants/imgs/header";
import Header from "../../../ui/components/Header";
import HobbiesIntro from "../../../ui/components/Introduction/Hobbies";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";
import GameType from "../../../ui/components/GameType";
import gameIcons from "../../../services/constants/icns/game-icons/iconNames";
import GamesShowcase from "../../../ui/components/Showcase/Games";
import Divisor from "../../../ui/components/Divisor";
import { useGameData } from "../../../ui/hooks/api/game/useGameData";
import GameRecentFuture from "../../../ui/components/Slides/Hobbies/GameSpecial";
import HobbyCarousel from "../../../ui/components/Slides/Hobbies/Common";
import GiIcon from "../../../services/constants/icns/game-icons/gameIcons";
import HobbyFinal from "../../../ui/components/HobbyFinal";
import pngImgs from "../../../services/constants/imgs/pngs";
import Footer from "../../../ui/components/Footer";

export default function Games() {
  useDocumentTitle("Jogos | Felipe Ferreira");
  const { t } = useTranslation("games", { useSuspense: true });
  const { popularity, bestRated, sections, isPending, hasError } =
    useGameData();

  if (isPending) {
    return console.log("Carregando...");
  }

  if (hasError) {
    return console.error("Erro ao buscar dados");
  }

  return (
    <div className={styles.ctn}>
      <header>
        <Header />

        <HobbiesIntro
          bgImage={headerImgs.games}
          color={"var(--main-05)"}
          border={"var(--bd-mn5)"}
          icon={<FaIcon icon={fontAwesome.gamepad} />}
          title={t("games.intro")}
          titleFont={"var(--gm-h1)"}
          mobTitleFont={"var(--gm-h2)"}
        />
      </header>

      <section className={styles.gmType}>
        <h2 className={styles.secTtl}>{t("games.sections.gamerType")}</h2>

        <div className={styles.gmBrandsCtn}>
          <GameType
            icon={gameIcons.rank1}
            type={"Casual"}
            tooltip={t("games.sections.ranks.casual")}
          />
          <GameType
            icon={gameIcons.rank2}
            type={"Normal"}
            tooltip={t("games.sections.ranks.normal")}
            active={true}
            animDelay={0.3}
          />
          <GameType
            icon={gameIcons.rank3}
            type={"Hardcore"}
            tooltip={t("games.sections.ranks.hardcore")}
            animDelay={0.6}
          />
        </div>
      </section>

      <Divisor marginTop={128} color={"var(--main-05)"} />

      <section className={styles.swcs}>
        <GamesShowcase
          title={t("games.sections.mostPopular.title")}
          subtitle={t("games.sections.mostPopular.subtitle")}
          icon={gameIcons.starFormation}
          data={Array.isArray(popularity) ? popularity : []}
        />

        <GamesShowcase
          title={t("games.sections.best.title")}
          subtitle={t("games.sections.best.subtitle")}
          icon={gameIcons.medal}
          data={
            Array.isArray(bestRated)
              ? bestRated.filter((q) => q.reviews_count > 100).slice(0, 20)
              : []
          }
        />
      </section>

      <Divisor marginTop={128} color={"var(--main-05)"} />

      <section className={styles.slds}>
        <GameRecentFuture
          data={
            Array.isArray(sections.pastFuture.data)
              ? sections.pastFuture.data
              : []
          }
          minLoadingTime={1500}
        />

        <HobbyCarousel
          type={"games"}
          color={"var(--main-05)"}
          borderBtm={"var(--bd-line-mn5)"}
          title={t("games.sections.favorite")}
          font={"var(--gm-h2)"}
          mbFont={"var(--gm-h3)"}
          icon={<GiIcon icon={gameIcons.hearts} />}
          isDataPending={isPending}
          minLoadingTime={1500}
          data={
            Array.isArray(sections.favorite.data) ? sections.favorite.data : []
          }
        />
      </section>

      <Divisor marginTop={128} color={"var(--main-05)"} />

      <HobbyFinal
        color={"var(--main-05)"}
        img={pngImgs.games}
        alt={"Aloy (Horizon Zero Dawn)"}
        font={"var(--gm-h2)"}
        mbFont={"var(--gm-h3)"}
      />

      <Footer marginTop={0} />
    </div>
  );
}
