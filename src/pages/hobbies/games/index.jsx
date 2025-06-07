import { useTranslation } from "react-i18next";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import headerImgs from "../../../services/constants/imgs/header";
import Header from "../../../ui/components/Header";
import HobbiesIntro from "../../../ui/components/Introduction/Hobbies";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";

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
        />
      </header>

      <section className={styles["gm-type"]}>
        <h2 className={`${styles["sec-ttl"]} ${styles["bd-ttl"]}`}>
          {t("games.sections.gamerType")}
        </h2>

        <div className={styles["gm-brands-ctn"]}></div>
      </section>
    </div>
  );
}
