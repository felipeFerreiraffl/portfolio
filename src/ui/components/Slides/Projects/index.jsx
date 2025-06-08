import { useQuery } from "@tanstack/react-query";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getProjects } from "../../../../services/api/other";
import FaIcon from "../../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../../services/constants/icns/font-awesome/iconNames";
import styles from "./style.module.css";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";

export default function ProjectsSlides() {
  const { t } = useTranslation("portfolio", { useSuspense: true });
  const [isVisible, setIsVisible] = useState(false);

  // Uso de cache e performace com useQuery
  const { data, isPending, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    retry: 3, // Tenta 3 vezes
    retryDelay: (attp) => Math.min(100 * 2 ** attp, 30000), // Delay exponencial
    staleTime: 1000 * 60 * 5, // Cache por 5 minutos
    placeholderData: [],
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleInView = useCallback(
    debounce(() => {
      if (inView) setIsVisible(true);
    }, 1500),
    [inView]
  );

  // Inicia o Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
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

  if (isPending) {
    return (
      <div className={styles["img-sklt"]}>
        <span className={styles["icn-sklt"]}>
          <FaIcon icon={fontAwesome.spinner} />
        </span>
      </div>
    );
  }

  useEffect(() => {
    handleInView();
  }, [inView, handleInView]);

  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.btn} ${styles.prev}`}
        onClick={scrollPrev}
        disabled={prevDisabled}
        aria-label="Previous"
      >
        <FaIcon icon={fontAwesome.circleLeft} />
      </button>

      <div className={styles.slidesWrapper} ref={emblaRef}>
        <div className={styles.slidesCtn} ref={ref}>
          {data.map((project) =>
            isVisible ? (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferer"
                className={styles.slide}
              >
                <div className={styles.imgWrapper}>
                  <img
                    src={project.imgSrc}
                    alt={`Github - ${t(
                      `portfolio.sections.projects.apiInfos.${project.id}`
                    )}`}
                    loading="lazy"
                    className={styles.img}
                  />

                  <div className={styles.overlay}>
                    <p className={styles.imgName}>
                      {t(`portfolio.sections.projects.apiInfos.${project.id}`)}
                    </p>
                  </div>
                </div>
              </a>
            ) : (
              <div key={project.id} className={styles.imgSklt}>
                <span className={styles.icnSklt}>
                  <FaIcon icon={fontAwesome.spinner} />
                </span>
              </div>
            )
          )}
        </div>
      </div>

      <button
        className={`${styles.btn} ${styles.next}`}
        onClick={scrollNext}
        disabled={nextDisabled}
        aria-label="Next"
      >
        <FaIcon icon={fontAwesome.circleRight} />
      </button>
    </div>
  );
}
