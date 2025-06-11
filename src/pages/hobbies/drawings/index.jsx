import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import headerImgs from "../../../services/constants/imgs/header";
import links from "../../../services/constants/links/links";
import MainButton from "../../../ui/components/Button/Main";
import Header from "../../../ui/components/Header";
import HobbiesIntro from "../../../ui/components/Introduction/Hobbies";
import { useDrawingsData } from "../../../ui/hooks/api/drawings/useDrawingsData";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";
import Divisor from "../../../ui/components/Divisor";
import HobbyFinal from "../../../ui/components/HobbyFinal";
import pngImgs from "../../../services/constants/imgs/pngs";
import Footer from "../../../ui/components/Footer";
import { motion } from "framer-motion";

export default function Drawings() {
  useDocumentTitle("Desenhos | Felipe Ferreira");
  const { t } = useTranslation("drawings", { useSuspense: true });
  const { t: instagram } = useTranslation("footer", { useSuspense: true });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false); // Estado para o lightbox
  const [selectedImg, setSelectedImg] = useState(0);

  const { data, isPending, isError } = useDrawingsData();

  if (isPending) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Erro ao buscar dados</div>;
  }

  // Breakpoints para o mosaico
  const breakpointsObj = {
    default: 3,
    768: 2,
  };

  // Cria os slides do lightbox
  const lightboxSlides = data
    ? data.map((draw) => ({
        src: draw.imgSrc,
        alt: `${t("drawings.myDrawings.title")} - ${draw.id}`,
        width: 3840,
        height: 2560,
      }))
    : [];

  // Abre e fecha a galeria
  const openLightbox = useCallback((img) => {
    setSelectedImg(img);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setSelectedImg(0);
  }, []);

  // Ícones personalizados para o lightbox
  const CustomIcons = {
    Close: () => (
      <FaIcon
        icon={fontAwesome.circleXMark}
        className={`${styles.lgBoxBtn} ${styles.close}`}
      />
    ),
    Previous: () => (
      <FaIcon
        icon={fontAwesome.circleLeft}
        className={`${styles.lgBoxBtn} ${styles.prev}`}
      />
    ),
    Next: () => (
      <FaIcon
        icon={fontAwesome.circleRight}
        className={`${styles.lgBoxBtn} ${styles.next}`}
      />
    ),
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
        <motion.div
          className={styles.contCtn}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
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
        </motion.div>

        <motion.span
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Masonry
            className={styles.msry}
            breakpointCols={breakpointsObj}
            columnClassName={styles.msryClmn}
          >
            {data.map((draw, i) => (
              <img
                className={styles.msryImg}
                key={draw.id}
                src={draw.imgSrc}
                alt={`${t("drawings.myDrawings.title")} - ${draw.id}`}
                title={`${t("drawings.myDrawings.title")} - ${draw.id}`}
                loading="lazy"
                onClick={() => openLightbox(i)}
                onError={(e) => {
                  console.error("Erro ao carregar imagem: ", draw.imgSrc);
                  e.target.style.display = "none";
                }}
              />
            ))}
          </Masonry>
        </motion.span>
      </section>

      <Lightbox
        open={isLightboxOpen}
        close={closeLightbox}
        index={selectedImg}
        slides={lightboxSlides}
        carousel={{
          finite: lightboxSlides.length <= 1,
          preload: 2,
          padding: "var(--sp-20)",
        }}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
        }}
        render={{
          buttonPrev: lightboxSlides.length <= 1 ? () => null : undefined,
          buttonNext: lightboxSlides.length <= 1 ? () => null : undefined,
          iconClose: () => <CustomIcons.Close />,
          iconPrev: () => <CustomIcons.Previous />,
          iconNext: () => <CustomIcons.Next />,
        }}
      />

      <Divisor marginTop={128} color={"var(--main-05)"} />

      <HobbyFinal
        img={pngImgs.drawings}
        alt={t("drawings.alt")}
        color={"var(--main-05)"}
        font={"var(--draw-h2)"}
        mbFont={"var(--draw-h3)"}
      />

      <Footer marginTop={0} />
    </div>
  );
}
