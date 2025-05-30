import { useTranslation } from "react-i18next";
import {
  FaIcnBook,
  FaIcnGamepad,
  FaIcnUmbrellaBeach,
} from "../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../services/constants/icns/font-awesome/iconNames";
import headerImgs from "../../services/constants/imgs/header";
import Header from "../../ui/components/Header";
import CommonIntro from "../../ui/components/Introduction/Common";
import styles from "./styles.module.css";
import HobbyPage from "../../ui/components/HobbyPage";
import bgImgs from "../../services/constants/imgs/bg";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../../ui/hooks/useDocumentTitle";

export default function Hobbies() {
  useDocumentTitle("Hobbies | Felipe Ferreira");
  const { t } = useTranslation("hobbies", { useSuspense: true });
  const navigate = useNavigate();

  return (
    <div className={styles.ctn}>
      <header>
        <Header />

        <CommonIntro
          bgImage={headerImgs.hobbies}
          color={"var(--main-05)"}
          icon={<FaIcnUmbrellaBeach icon={fontAwesome.umbrellaBeach} />}
          title={"Hobbies"}
          subtitle={t("intro.subtitle")}
        />
      </header>

      <div className={styles["routes-ctn"]}>
        <HobbyPage
          bgImage={bgImgs.animesMangas}
          color={"var(--main-02)"}
          icon={<FaIcnBook icon={fontAwesome.book} />}
          border={"var(--bd-mn2)"}
          title={t("hobbie-pages.anime-manga.title")}
          ttlFont={"var(--anmg-h2)"}
          mobTtlFont={"var(--anmg-h3)"}
          desc={t("hobbie-pages.anime-manga.description")}
          descFont={"var(--anmg-subttl)"}
          onClick={() => navigate("/hobbies/animes-mangas")}
        />
        <HobbyPage
          bgImage={bgImgs.games}
          color={"var(--main-05)"}
          icon={<FaIcnGamepad icon={fontAwesome.gamepad} />}
          border={"var(--bd-mn5)"}
          title={t("hobbie-pages.games.title")}
          ttlFont={"var(--gm-h2)"}
          mobTtlFont={"var(--gm-h3)"}
          desc={t("hobbie-pages.games.description")}
          descFont={"var(--gm-subttl)"}
          onClick={() => navigate("/hobbies/games")}
        />
        <HobbyPage
          bgImage={bgImgs.football}
          color={"var(--main-02)"}
          icon={<FaIcnBook icon={fontAwesome.book} />}
          border={"var(--bd-mn2)"}
          title={t("hobbie-pages.football.title")}
          ttlFont={"var(--fut-h2)"}
          mobTtlFont={"var(--fut-h3)"}
          desc={t("hobbie-pages.football.description")}
          descFont={"var(--fut-subttl)"}
          onClick={() => navigate("/hobbies/football")}
        />
        <HobbyPage
          bgImage={bgImgs.drawings}
          color={"var(--main-05)"}
          icon={<FaIcnBook icon={fontAwesome.book} />}
          border={"var(--bd-mn5)"}
          title={t("hobbie-pages.drawings.title")}
          ttlFont={"var(--draw-h2)"}
          mobTtlFont={"var(--draw-h3)"}
          desc={t("hobbie-pages.drawings.description")}
          descFont={"var(--draw-subttl)"}
          onClick={() => navigate("/hobbies/drawings")}
        />
      </div>
    </div>
  );
}
