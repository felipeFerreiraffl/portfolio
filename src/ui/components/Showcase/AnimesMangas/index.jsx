import useEmblaCarousel from "embla-carousel-react";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import FaIcon from "../../../../services/constants/icns/font-awesome/fontAwesome";
import styles from "./style.module.css";
import fontAwesome from "../../../../services/constants/icns/font-awesome/iconNames";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";

export default function AnimesMangasShowcase({
  type,
  flexDirection,
  alignItems,
  title,
  desc,
  icon,
  data = [],
}) {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [emblaRef] = useEmblaCarousel(
    {
      align: flexDirection === "row" ? "start" : "end",
      direction: flexDirection === "row" ? "ltr" : "rtl",
      loop: true,
      dragFree: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1.2,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ]
  );

  // Gera debounce para carregamento controlado
  // Callback para evitar re-renderização
  const handleInView = useCallback(
    debounce(() => {
      if (inView) setIsVisible(true);
    }, 1200),
    [inView]
  );

  // Inicia a função de debounce ao recarregar
  useEffect(() => {
    handleInView();
  }, [inView, handleInView]);

  return (
    <div
      className={styles.ctn}
      style={{ "--flex-direc": flexDirection, "--align-items": alignItems }}
      tabIndex={0}
    >
      <motion.div
        className={styles.contCtn}
        initial={{ opacity: 0, x: flexDirection === "row" ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className={styles.txtCtn}
          style={{ textAlign: alignItems === "flex-start" ? "start" : "end" }}
        >
          <h2 className={styles.ttl}>{title}</h2>
          <p className={styles.desc}>{desc}</p>
        </div>

        <span className={styles.icn}>{<FaIcon icon={icon} />}</span>
      </motion.div>

      <div className={styles.crsl}>
        <div className={styles.slideWppr} ref={emblaRef}>
          <div ref={ref} className={styles.slidesCtn}>
            {isVisible ? (
              data.map((dt) => (
                <a
                  key={dt.mal_id}
                  className={styles.slide}
                  href={
                    type === "animes"
                      ? `/hobbies/animes-mangas/anime/${dt.mal_id}`
                      : `/hobbies/animes-mangas/manga/${dt.mal_id}`
                  }
                >
                  <div className={styles.imgWppr}>
                    <img
                      src={dt.images.webp.image_url || dt.images.jpg.image_url}
                      alt={
                        `${type} - ${dt.title}` ||
                        `${type} - ${dt.title_english}`
                      }
                      className={styles.img}
                      loading="lazy"
                    />

                    <div className={styles.ovly}>
                      <p className={styles.name}>
                        {dt.title || dt.title_english}
                      </p>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div className={styles.load}>
                <span className={styles.loadSpin}>
                  <FaIcon icon={fontAwesome.spinner} />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
