import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import FaIcon from "../../../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../../../services/constants/icns/font-awesome/iconNames";
import GiIcon from "../../../../../services/constants/icns/game-icons/gameIcons";
import gameIcons from "../../../../../services/constants/icns/game-icons/iconNames";
import styles from "./style.module.css";
import {
  getImage,
  getKeys,
  getLink,
  getName,
} from "../../../../../services/functions/apiData";
import useEmblaCarousel from "embla-carousel-react";

export default function HobbyCarousel({
  type,
  title,
  icon,
  color,
  font,
  mbFont,
  borderBtm,
  data = [],
  isDataPending,
  minLoadingTime,
}) {
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
    <div className={styles.ctn} style={{ "--color": color }}>
      <div className={styles.ttlCtn} style={{ "--border-btm": borderBtm }}>
        <h2
          className={styles.ttl}
          style={{ "--font": font, "--mob-font": mbFont }}
        >
          {title}
        </h2>
        <span className={styles.icn}>{icon}</span>
      </div>
      <div ref={ref} className={styles.crsl}>
        <div className={styles.slideWppr} ref={emblaRef}>
          <div className={styles.slideCtn}>
            {inView && !isDataPending && minTimePassed
              ? data.map((dt) => (
                  <a
                    key={getKeys(type, dt)}
                    className={styles.slide}
                    href={getLink(type, dt)}
                  >
                    <div
                      className={styles.imgWppr}
                      style={{
                        "--aspect-ratio":
                          type === "games" ? "16 / 9" : "100 / 143",
                      }}
                    >
                      <img
                        className={styles.img}
                        src={getImage(type, dt)}
                        alt={`${type} - ${getName(type, dt)}`}
                        loading="lazy"
                      />

                      <div className={styles.ovly}>
                        <p className={styles.name}>{getName(type, dt)}</p>
                      </div>
                    </div>
                  </a>
                ))
              : [...Array(4)].map((_, i) => (
                  <div
                    className={styles.imgSklt}
                    key={i}
                    style={{
                      "--aspect-ratio":
                        type === "games" ? "16 / 9" : "100 / 143",
                    }}
                  >
                    <span className={styles.imgSpin}>
                      {type === "games" ? (
                        <GiIcon icon={gameIcons.circleClaws} />
                      ) : (
                        <FaIcon icon={fontAwesome.spinner} />
                      )}
                    </span>
                  </div>
                ))}
          </div>
        </div>

        <button
          className={`${styles.btn} ${styles.prev}`}
          disabled={prevDisabled}
          onClick={scrollPrev}
          aria-label="Previous"
        >
          {type === "games" ? (
            <GiIcon
              icon={gameIcons.playButton}
              style={{ transform: "rotate(180deg)" }}
            />
          ) : (
            <FaIcon icon={fontAwesome.circleLeft} />
          )}
        </button>

        <button
          className={`${styles.btn} ${styles.next}`}
          disabled={nextDisabled}
          onClick={scrollNext}
          aria-label="Next"
        >
          {type === "games" ? (
            <GiIcon icon={gameIcons.playButton} />
          ) : (
            <FaIcon icon={fontAwesome.circleRight} />
          )}
        </button>
      </div>
    </div>
  );
}
