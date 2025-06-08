import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import GiIcon from "../../../../services/constants/icns/game-icons/gameIcons";
import gameIcons from "../../../../services/constants/icns/game-icons/iconNames";
import styles from "./style.module.css";

export default function GamesShowcase({ title, subtitle, icon, data = [] }) {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [emblaRef] = useEmblaCarousel(
    {
      align: "center",
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
    <div className={styles.ctn}>
      <div className={styles.cont}>
        <div className={styles.txtCtn}>
          <h2 className={styles.ttl}>{title}</h2>
          <p className={styles.subttl}>{subtitle}</p>
        </div>
        <span className={styles.icn}>
          <GiIcon icon={icon} />
        </span>
      </div>

      <div className={styles.crsl}>
        <div className={styles.slideWppr} ref={emblaRef}>
          <div ref={ref} className={styles.slidesCtn}>
            {isVisible ? (
              data.map((game) => (
                <a
                  key={`game - ${game.id}`}
                  href={`/hobbies/games/game/${game.id}`}
                  className={styles.slide}
                >
                  <div className={styles.imgWppr}>
                    <img
                      src={game.background_image}
                      alt={game.name || game.name_original || "?"}
                      className={styles.img}
                      loading="lazy"
                    />

                    <div className={styles.ovly}>
                      <p className={styles.name}>
                        {game.name || game.name_original || "?"}
                      </p>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div className={styles.load}>
                <span className={styles.loadSpin}>
                  <GiIcon icon={gameIcons.circleClaws} />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
