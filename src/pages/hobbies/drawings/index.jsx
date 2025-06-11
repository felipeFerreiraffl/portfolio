import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import Header from "../../../ui/components/Header";
import HobbiesIntro from "../../../ui/components/Introduction/Hobbies";
import headerImgs from "../../../services/constants/imgs/header";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";
import MainButton from "../../../ui/components/Button/Main";
import links from "../../../services/constants/links/links";
import Masonry from "react-masonry-css";

export default function Drawings() {
  useDocumentTitle("Desenhos | Felipe Ferreira");
  const { t } = useTranslation("drawings", { useSuspense: true });
  const { t: instagram } = useTranslation("footer", { useSuspense: true });

  // Breakpoints para o mosaico
  const breakpointsObj = {
    default: 3,
    768: 2,
  };

  return (
    <div className={styles.ctn}>
      <header>
        <Header />

        <HobbiesIntro
          bgImage={headerImgs.drawings}
          color={"var(--main-05)"}
          border={"var(--bd-mn5)"}
          icon={<FaIcon icon={fontAwesome.paintbrush} />}
          titleFont={"var(--draw-h1)"}
          mobTitleFont={"var(--draw-h2)"}
          title={t("drawings.title")}
        />
      </header>

      <section className={styles.secCtn}>
        <div className={styles.contCtn}>
          <div className={styles.txtCtn}>
            <h2 className={styles.ttl}>{t("drawings.myDrawings.title")}</h2>
            <p className={styles.subttl}>{t("drawings.myDrawings.subtitle")}</p>
          </div>

          <MainButton
            type={"external"}
            color={"var(--main-04)"}
            href={links.socialMedias.instagram}
            text={t("drawings.myDrawings.button")}
            title={instagram("footer.aria-labels.instagram")}
          />
        </div>

        <Masonry
          className={styles}
          breakpointCols={breakpointsObj}
          columnClassName={styles}
        ></Masonry>
      </section>
    </div>
  );
}
