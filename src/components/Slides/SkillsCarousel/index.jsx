import useEmblaCarousel from "embla-carousel-react";
import styles from "./styles.module.css";
import { useCallback, useEffect, useState } from "react";
import Slide from "./Slide";
import { skillsData } from "../../../data/data";
import { useTranslation } from "react-i18next";
import DotCarousel from "./DotCarousel";
import { Icon } from "@iconify/react/dist/iconify.js";
import icons from "../../../services/utils/icons";
import {
  emblaUseEffect,
  getEmblaCallbacks,
  useEmblaOptions,
} from "../../../services/utils/hooks/Skills/emblaHandler";
import { useGSAPTimeline } from "../../../services/utils/hooks/global/gsap";

export default function SkillsCarousel() {
  // Traduções
  const { t: tSections } = useTranslation("sections");
  const { t: tCommon } = useTranslation("common");

  // Inicia o Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(useEmblaOptions);

  // Estados dos botões desabilidados
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  // Estado do index do slide
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Estado dos slides
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
    getEmblaCallbacks(
      emblaApi,
      setPrevDisabled,
      setNextDisabled,
      setSelectedIndex
    );
  }, [emblaApi, setSelectedIndex]);

  // Atualiza o Embla Carousel
  useEffect(() => {
    emblaUseEffect(emblaApi, onSelect, setScrollSnaps);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <button
          className={`${styles.btn} ${styles.left}`}
          onClick={handleScrollPrev}
          disabled={prevDisabled}
          title={tCommon("tooltip.buttons.prev")}
          aria-label={tCommon("tooltip.buttons.prev")}
          tabIndex={0}
        >
          <Icon icon={icons.remix.arrow.arrowDropLeft} />
        </button>
        <div className={styles.carouselViewport} ref={emblaRef}>
          <div className={styles.carouselContainer}>
            {skillsData.map((slide, i) => (
              <Slide
                key={i}
                title={tSections(slide.title)}
                src={slide.imgSrc}
                alt={tSections(slide.title)}
                techs={slide.techs}
              />
            ))}
          </div>
        </div>
        <button
          className={`${styles.btn} ${styles.right}`}
          onClick={handleScrollNext}
          disabled={nextDisabled}
          title={tCommon("tooltip.buttons.next")}
          aria-label={tCommon("tooltip.buttons.next")}
          tabIndex={0}
        >
          <Icon icon={icons.remix.arrow.arrowDropRight} />
        </button>
      </div>

      <div className={styles.floor}>
        <div className={styles.dotContainer}>
          {scrollSnaps.map((_, i) => (
            <DotCarousel
              key={i}
              onClick={() => handleScrollTo(i)}
              selected={i === selectedIndex ? true : false}
              title={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className={styles.base}></div>
      </div>
    </div>
  );
}
