import { useTranslation } from "react-i18next";
import { FaIcnNewspaper } from "../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../services/constants/icns/font-awesome/iconNames";
import headerImgs from "../../services/constants/imgs/header";
import Header from "../../ui/components/Header";
import CommonIntro from "../../ui/components/Introduction/Common";
import styles from "./style.module.css";

export default function Portfolio() {
  const { t } = useTranslation("portfolio", { useSuspense: true });

  return (
    <div className={styles}>
      <header>
        <Header />

        <CommonIntro
          icon={<FaIcnNewspaper icon={fontAwesome.newspaper} />}
          bgImage={headerImgs.portfolio}
          color={"var(--main-02)"}
          title={t("intro.title")}
          subtitle={t("intro.subtitle")}
        />
      </header>
    </div>
  );
}
