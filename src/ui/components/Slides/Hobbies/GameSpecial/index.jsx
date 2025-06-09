import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import GiIcon from "../../../../../services/constants/icns/game-icons/gameIcons";
import gameIcons from "../../../../../services/constants/icns/game-icons/iconNames";
import { useInView } from "react-intersection-observer";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function GameRecentFuture({ data = [], minLoadingTime }) {
  const { t } = useTranslation("games", { useSuspense: true });

  const [minTimePassed, setMinTimePassed] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setMinTimePassed(true), minLoadingTime);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  // Inicia o Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });

  //   Estados dos botões desabilitados
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  // Permitem o scroll (avançar e voltar)
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Permite a rolagem
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    if (!data || data.length === 0) return;

    emblaApi.reInit(); // Garante re-inicialização quandos os slides mudam
    onSelect();
    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect, data]);

  return (
    <div className={styles.ctn}>
      <div className={styles.txtCtn}>
        <div className={styles.ttlCtn}>
          <h2 className={styles.ttl}>{t("games.sections.pastFuture.title")}</h2>
          <span className={styles.icn}>
            <GiIcon icon={gameIcons.gamepad} />
          </span>
        </div>
        <p className={styles.subttl}>
          {t("games.sections.pastFuture.subtitle")}
        </p>
      </div>

      <div ref={ref} className={styles.crsl}>
        <div ref={emblaRef} className={styles.slideWppr}>
          <div className={styles.slideCtn}>
            {inView && minTimePassed
              ? data.map((game) => (
                  <a
                    href={`/hobbies/games/game/${game.id}`}
                    className={styles.slide}
                    role="img"
                  >
                    <div className={styles.imgWppr}>
                      <img
                        src={game.background_image}
                        alt={game.name || game.name_original || ""}
                        className={styles.img}
                      />
                      <div className={styles.ovly}>
                        <p className={styles.name}>
                          {game.name || game.name_original || ""}
                        </p>
                      </div>
                    </div>
                  </a>
                ))
              : [...Array(4)].map((_, i) => (
                  <div key={i} className={styles.imgSklt}>
                    <span className={styles.imgSpin}>
                      <GiIcon icon={gameIcons.circleClaws} />
                    </span>
                  </div>
                ))}
          </div>
        </div>

        <button
          className={`${styles.btn} ${styles.prev}`}
          onClick={scrollPrev}
          disabled={prevDisabled}
          aria-label="Previous"
        >
          <GiIcon icon={gameIcons.playButton} />
        </button>
        <button
          className={`${styles.btn} ${styles.next}`}
          onClick={scrollNext}
          disabled={nextDisabled}
          aria-label="Next"
        >
          <GiIcon icon={gameIcons.playButton} />
        </button>
      </div>
    </div>
  );
}
