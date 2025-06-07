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

export default function Games() {
  useDocumentTitle("Jogos | Felipe Ferreira");
  const { t } = useTranslation("games", { useSuspense: true });

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

      <section className={styles["gm-type"]}>
        <h2 className={styles["sec-ttl"]}>{t("games.sections.gamerType")}</h2>

        <div className={styles["gm-brands-ctn"]}>
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
          />
          <GameType
            icon={gameIcons.rank3}
            type={"Hardcore"}
            tooltip={t("games.sections.ranks.hardcore")}
          />
        </div>
      </section>
    </div>
  );
}
