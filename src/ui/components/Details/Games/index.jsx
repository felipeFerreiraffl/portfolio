import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import GiIcon from "../../../../services/constants/icns/game-icons/gameIcons";
import gameIcons from "../../../../services/constants/icns/game-icons/iconNames";
import styles from "./style.module.css";

export default function GameDetails({ data }) {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const trailerOpts = {
    width: "100%",
    height: "100%",
  };

  const handleInView = useCallback(
    debounce(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, 3000),
    [inView]
  );

  const handleMetacriticColor = () => {
    let metacritic = data.metacritic;

    switch (metacritic) {
      case metacritic >= 85:
        return "var(--aux-01)";

      case metacritic < 85 && metacritic >= 75:
        return "var(--aux-02)";

      case metacritic < 75 && metacritic >= 60:
        return "var(--aux-03)";

      case metacritic < 60:
        return "var(--aux-04)";

      default:
        return "var(--neu-03)";
    }
  };

  useEffect(() => {
    handleInView();
  }, [inView, handleInView]);

  return (
    <div ref={ref} className={styles.ctn}>
      {!isVisible ? (
        <div className={styles.loadCtn}>
          <span className={styles.loadSpin}>
            <GiIcon icon={gameIcons.circleClaws} />
          </span>
        </div>
      ) : (
        <section className={styles.cont}>
          <div
            className={styles.hdr}
            style={{ "--bg-image": `url(${data.background_image_additional})` }}
          >
            <img
              src={data.background_image}
              alt={data.name || data.name_original || "?"}
              className={styles.cover}
            />
            <div className={styles.mnInfosCtn}>
              <div className={styles.txtCtn}>
                <h1 className={styles.ttl}>
                  {data.name || data.name_original || "...?"}
                </h1>
                <p className={styles.dev}>{data.developers[0]?.name || "?"}</p>
              </div>
              <div className={styles.scoreCtn}>
                <div className={styles.ratingCtn}></div>
                <p
                  className={styles.mtcrtc}
                  style={{ "--meta-color": handleMetacriticColor() }}
                >
                  {data.metacritic || "?"}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
