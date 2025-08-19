import useEmblaCarousel from "embla-carousel-react";
import styles from "./styles.module.css";
import { useCallback, useEffect, useState } from "react";
import Slide from "./Slide";
import { skillsData } from "../../../services/utils/jsons/data";
import { useTranslation } from "react-i18next";
import DotCarousel from "./DotCarousel";
import { Icon } from "@iconify/react/dist/iconify.js";
import icons from "../../../services/utils/jsons/icons";

export default function SkillsCarousel() {
  const { t: tSections } = useTranslation("sections");

  // Inicia o Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    dragFree: false,
  });

  // Estados dos botões desabilidados
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  // Estado do index do slide
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Permite a rolagem para esquerda (prev), direita (next) ou escolher qual slide navegar
  const handleScrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const handleScrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const handleScrollTo = useCallback(
    (i) => {
      if (emblaApi) emblaApi.scrollTo(i);
    },
    [emblaApi]
  );

  // Permite a seleção dos slides pelos botões
  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
    setSelectedIndex(!emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit();
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.btn} ${styles.left}`}
        onClick={handleScrollPrev}
        disabled={prevDisabled}
      >
        <Icon icon={icons.remix.arrow.arrowDropLeft} />
      </button>

      <div className={styles.carousel}>
        <div className={styles.carouselViewport} ref={emblaRef}>
          <div className={styles.carouselContainer}>
            {skillsData.map((slide, i) => (
              <Slide
                key={i}
                title={tSections(slide.title)}
                src={slide.imgSrc}
                alt={slide.title}
                techs={slide.techs}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        className={`${styles.btn} ${styles.right}`}
        onClick={handleScrollNext}
        disabled={nextDisabled}
      >
        <Icon icon={icons.remix.arrow.arrowDropRight} />
      </button>

      <div className={styles}>
        <div className={styles}>
          {scrollSnaps.map((_, i) => (
            <DotCarousel
              key={i}
              onClick={() => handleScrollTo(i)}
              selected={i === selectedIndex ? true : false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
