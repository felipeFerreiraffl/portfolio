import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FaIcon from "../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../services/constants/icns/font-awesome/iconNames";
import bgImgs from "../../../services/constants/imgs/bg";
import headerImgs from "../../../services/constants/imgs/header";
import AnimeContent from "../../../ui/components/Content/AnimeContent";
import MangaContent from "../../../ui/components/Content/MangaContent";
import Footer from "../../../ui/components/Footer";
import Header from "../../../ui/components/Header";
import HobbiesIntro from "../../../ui/components/Introduction/Hobbies";
import useDocumentTitle from "../../../ui/hooks/useDocumentTitle";
import styles from "./style.module.css";

export default function AnimesMangas() {
  useDocumentTitle("Animes & Mangás | Felipe Ferreira");
  const { t } = useTranslation("animes-mangas", { useSuspense: true });
  const [type, setType] = useState("");
  const [debouncedType, setDebouncedType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Função para não carregar o conteúdo de uma vez
  const debounceSetType = useCallback(
    debounce((selectedType) => {
      setDebouncedType(selectedType);
      setIsLoading(false);
    }, 1500),
    []
  );

  // Função de seleção do tipo de conteúdo
  const handleTypeSelection = (selectedType) => {
    setType(selectedType);
    setIsLoading(true);

    // Cancela debounce anterior para começar um novo
    debounceSetType.cancel();
    debounceSetType(selectedType);
  };

  // Cancela o debounce ao desmontar o componente
  useEffect(() => {
    return () => {
      debounceSetType.cancel();
    };
  }, [debounceSetType]);

  return (
    <div className={styles.ctn}>
      <header>
        <Header />

        <HobbiesIntro
          bgImage={headerImgs.animesMangas}
          color={"var(--main-02)"}
          border={"var(--bd-mn2)"}
          icon={<FaIcon icon={fontAwesome.book} />}
          title={t("animesMangas.title")}
          titleFont={"var(--anmg-h1)"}
          mobTitleFont={"var(--anmg-h2)"}
        />
      </header>
      <section className={styles.chsCtn}>
        <h2 className={styles.secTtl}>{t("animesMangas.choose.title")}</h2>
        <div className={styles.chsCardCtn}>
          <div
            className={`${styles.chs} ${styles.anime} ${
              type === "animes" ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${bgImgs.anime})` }}
            onClick={() => handleTypeSelection("animes")}
            title={"Animes"}
            role="button"
            tabIndex={0}
          >
            <span className={styles.chsIcn}>
              <FaIcon icon={fontAwesome.language} />
            </span>
            <h3 className={styles["secTtl"]}>Animes</h3>
          </div>

          <div
            className={`${styles.chs} ${styles.manga} ${
              type === "mangas" ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${bgImgs.manga})` }}
            onClick={() => handleTypeSelection("mangas")}
            title={t("animesMangas.choose.mangas")}
            role="button"
            tabIndex={0}
          >
            <span className={styles.chsIcn}>
              <FaIcon icon={fontAwesome.bookOpenReader} />
            </span>
            <h3 className={styles["secTtl"]}>
              {t("animesMangas.choose.mangas")}
            </h3>
          </div>
        </div>
      </section>

      {isLoading && (
        <div className={styles.loadCtn}>
          <span className={styles.loadSpin}>
            <FaIcon icon={fontAwesome.spinner} />
          </span>
        </div>
      )}

      {/* Renderiza baseado no tipo escolhido */}
      {debouncedType === "animes" && !isLoading && <AnimeContent />}
      {debouncedType === "mangas" && !isLoading && <MangaContent />}

      <Footer marginTop={type === "animes" || type === "mangas" ? 0 : 128} />
    </div>
  );
}
