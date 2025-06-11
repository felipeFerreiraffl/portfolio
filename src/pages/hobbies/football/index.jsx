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

export default function Football() {
  useDocumentTitle("Futebol | Felipe Ferreira");
  const { t } = useTranslation("football", { useSuspense: true });
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal
  const [selectedPosition, setSelectedPosition] = useState(null); // Estado da posição selecionada para modal
  const { data: positionData, isPending, isError } = usePositionData();

  if (isPending) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Erro ao buscar dados</div>;
  }

  // Fecha o modal com ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        handleCloseModal();
      }

      if (isModalOpen) {
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden"; // Previne o scroll
      }

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    };
  }, [isModalOpen]);

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

      <section className={styles.posCtn}>
        <div className={styles.contCtn}>
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
              <p
                key={pos.id}
                className={styles.pos}
                style={{
                  "--pos-border": handleGetFavoritePosition(pos),
                }}
                onClick={() => handleOpenModal(pos)}
                title={t("football.sections.positions.modalInfo")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenModal(pos);
                  }
                }}
              >
                {t(`football.sections.positions.api.${pos.id}.abbr`)}
              </p>
            </>
          ))}
        </div>
      </section>

      {isModalOpen && selectedPosition && (
        <div className={styles.posModalCtn}>
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
        </div>
      )}
    </div>
  );
}
