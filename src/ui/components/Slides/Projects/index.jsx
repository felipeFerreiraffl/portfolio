import { useCallback, useEffect, useRef, useState } from "react";
import {
  FaIcnCircleLeft,
  FaIcnCircleRight,
  FaIcnSpinner,
} from "../../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../../services/constants/icns/font-awesome/iconNames";
import styles from "./style.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../../../services/api/other";
import { useTranslation } from "react-i18next";

export default function ProjectsSlides() {
  const { t } = useTranslation("portfolio", { useSuspense: true });

  // Uso de cache e performace com useQuery
  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

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
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.btn} ${styles.prev}`}
        onClick={scrollPrev}
        disabled={prevDisabled}
      >
        <FaIcnCircleLeft icon={fontAwesome.circleLeft} />
      </button>

      <div className={styles["slides-wrapper"]} ref={emblaRef}>
        <div className={styles["slides-ctn"]}>
          {data.map((project) => (
            <>
              {isLoading ? (
                <div className={styles["img-sklt"]}>
                  <FaIcnSpinner
                    icon={fontAwesome.spinner}
                    className={styles["icn-sklt"]}
                  />
                </div>
              ) : (
                <a
                  key={project.id}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferer"
                  className={styles.slide}
                >
                  <div className={styles["img-wrapper"]}>
                    <img
                      src={project.imgSrc}
                      alt={`sections.projects.apiInfos.${project.id}`}
                      loading="lazy"
                      className={styles.img}
                    />

                    <div className={styles.overlay}>
                      <p className={styles["img-name"]}>
                        {t(`sections.projects.apiInfos.${project.id}`)}
                      </p>
                    </div>
                  </div>
                </a>
              )}
            </>
          ))}
        </div>
      </div>

      <button
        className={`${styles.btn} ${styles.next}`}
        onClick={scrollNext}
        disabled={nextDisabled}
      >
        <FaIcnCircleRight icon={fontAwesome.circleRight} />
      </button>
    </div>
  );
}
