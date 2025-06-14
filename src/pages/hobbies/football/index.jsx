import { useTranslation } from "react-i18next";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import headerImgs from "../../../services/constants/imgs/header";
import Header from "../../../ui/components/Header";
import HobbiesIntro from "../../../ui/components/Introduction/Hobbies";
import { usePositionData } from "../../../ui/hooks/api/football/usePositionData";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";
import { useCallback, useEffect, useState } from "react";
import Divisor from "../../../ui/components/Divisor";
import { usePlayersData } from "../../../ui/hooks/api/football/usePlayersData";
import HobbyCarousel from "../../../ui/components/Slides/Hobbies/Common";
import Footer from "../../../ui/components/Footer";
import HobbyFinal from "../../../ui/components/HobbyFinal";
import pngImgs from "../../../services/constants/imgs/pngs";
import { motion } from "framer-motion";

export default function Football() {
  useDocumentTitle("Futebol | Felipe Ferreira");
  const { t } = useTranslation("football", { useSuspense: true });
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal
  const [selectedPosition, setSelectedPosition] = useState(null); // Estado da posição selecionada para modal

  // API de posições
  const {
    data: positionData,
    isPending: positionPending,
    isError: positionError,
  } = usePositionData();

  // API de jogadores
  const {
    data: playerData,
    isPending: playerPending,
    isError: playerError,
  } = usePlayersData();

  if (positionPending || playerPending) {
    return <div>Carregando...</div>;
  }

  if (positionError || playerError) {
    return <div>Erro ao buscar dados</div>;
  }

  // Define a borda da posição baseada na sigla
  const handleGetFavoritePosition = (pos) => {
    const abbr = t(`football.sections.positions.api.${pos.id}.abbr`);

    if (abbr === "ZAG" || abbr === "VOL" || abbr === "CB" || abbr === "DM") {
      return "var(--bd-aux3)";
    } else {
      return "var(--bd-mn1)";
    }
  };
  // Define a borda da posição baseada na sigla
  const handleGetFavoritePositionName = (pos) => {
    const name = t(`football.sections.positions.api.${pos.id}.name`);

    if (
      name === "Zagueiro" ||
      name === "Volante" ||
      name === "Centerback" ||
      name === "Defensive midfielder"
    ) {
      return "var(--bd-aux3)";
    } else {
      return "var(--bd-mn1)";
    }
  };

  // Abre e fecha os modais
  const handleOpenModal = useCallback((pos) => {
    setSelectedPosition(pos);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedPosition(null);
    setIsModalOpen(false);
  }, []);

  // Fecha o modal clicando no fundo
  const handleOverlayClose = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  // Fecha o modal com ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflowY = "hidden"; // Previne o scroll
    } else {
      document.body.style.overflowY = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflowY = "unset";
    };
  }, [isModalOpen, handleCloseModal]);

  return (
    <div className={styles.ctn}>
      <header>
        <Header />

        <HobbiesIntro
          bgImage={headerImgs.football}
          color={"var(--main-02)"}
          border={"var(--bd-line-mn2)"}
          icon={<FaIcon icon={fontAwesome.futbol} />}
          title={t("football.title")}
          titleFont={"var(--fut-h1)"}
          mobTitleFont={"var(--fut-h2)"}
        />
      </header>

      <motion.section
        className={styles.posCtn}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={styles.contCtn} tabIndex={0}>
          <div className={styles.txtCtn}>
            <h2 className={styles.ttl}>
              {t("football.sections.positions.title")}
            </h2>
            <p className={styles.subttl}>
              {t("football.sections.positions.subtitle")}
            </p>
          </div>

          <div className={styles.lgndCtn}>
            <div className={styles.lgnd}>
              <div
                className={styles.lgndClr}
                style={{ backgroundColor: "var(--aux-03)" }}
              />
              <p className={styles.lgndTxt}>
                {t("football.sections.positions.legends.favorite")}
              </p>
            </div>

            <div className={styles.lgnd}>
              <div
                className={styles.lgndClr}
                style={{ backgroundColor: "var(--main-01)" }}
              />

              <p className={styles.lgndTxt}>
                {t("football.sections.positions.legends.normal")}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.fieldCtn}>
          {positionData.map((pos) => (
            <>
              <motion.p
                key={pos.id}
                className={styles.pos}
                style={{
                  "--pos-border": handleGetFavoritePosition(pos),
                }}
                onClick={() => handleOpenModal(pos)}
                title={t("football.sections.positions.modalInfo")}
                role="button"
                tabIndex={0}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenModal(pos);
                  }
                }}
              >
                {t(`football.sections.positions.api.${pos.id}.abbr`)}
              </motion.p>
            </>
          ))}
        </div>
      </motion.section>

      {isModalOpen && selectedPosition && (
        <motion.div
          className={styles.posModalCtn}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className={styles.ovly} onClick={handleOverlayClose} />

          <div
            className={styles.posModal}
            style={{
              "--modal-border": handleGetFavoritePositionName(selectedPosition),
            }}
          >
            <span
              className={styles.modalBtn}
              onClick={handleCloseModal}
              role="button"
              tabIndex={0}
            >
              <FaIcon icon={fontAwesome.circleXMark} />
            </span>

            <h2 className={styles.modalTtl}>
              {t(`football.sections.positions.api.${selectedPosition.id}.name`)}
            </h2>
            <p className={styles.modalDesc}>
              {t(`football.sections.positions.api.${selectedPosition.id}.desc`)}
            </p>
          </div>
        </motion.div>
      )}

      <Divisor marginTop={128} color={"var(--main-02)"} />

      <section className={styles.slidesCtn}>
        <HobbyCarousel
          type={"football"}
          color={"var(--main-02)"}
          borderBtm={"var(--bd-line-mn2)"}
          font={"var(--fut-h2)"}
          mbFont={"var(--fut-h3)"}
          title={t("GOATs")}
          isDataPending={playerPending}
          minLoadingTime={1500}
          data={playerData.filter((ply) => ply.category === "GOAT")}
        />

        <HobbyCarousel
          type={"football"}
          color={"var(--main-02)"}
          borderBtm={"var(--bd-line-mn2)"}
          font={"var(--fut-h2)"}
          mbFont={"var(--fut-h3)"}
          title={t("football.sections.best")}
          isDataPending={playerPending}
          minLoadingTime={1500}
          data={playerData.filter((ply) => ply.category === "CURRENT")}
        />
      </section>

      <Divisor marginTop={128} color={"var(--main-02)"} />

      <HobbyFinal
        img={pngImgs.football}
        alt={"Lionel Messi"}
        color={"var(--main-02)"}
        font={"var(--fut-h2)"}
        mbFont={"var(--fut-h3)"}
      />

      <Footer marginTop={0} />
    </div>
  );
}
