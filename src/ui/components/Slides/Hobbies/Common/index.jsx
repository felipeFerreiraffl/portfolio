import { useInView } from "framer-motion";
import FaIcon from "../../../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../../../services/constants/icns/font-awesome/iconNames";
import GiIcon from "../../../../../services/constants/icns/game-icons/gameIcons";
import gameIcons from "../../../../../services/constants/icns/game-icons/iconNames";
import styles from "./style.module.css";
import { debounce } from "lodash";
import { useCallback, useState } from "react";

export default function HobbyCarousel({
  type,
  title,
  icon,
  color,
  font,
  mbFont,
  borderBtm,
  data = [],
}) {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleInView = useCallback(
    debounce(() => {
      if (inView) setIsVisible(true);
    }, 1200),
    [inView]
  );

  return (
    <div className={styles.ctn} style={{ "--color": color }}>
      <div className={styles["ttl-ctn"]} style={{ "--border-btm": borderBtm }}>
        <h2
          className={styles.ttl}
          style={{ "--font": font, "--mob-font": mbFont }}
        >
          {title}
        </h2>
        <span className={styles.icn}>{icon}</span>
      </div>
      <div className={styles.crsl}>
        <div className={styles["slide-wppr"]}>
          <div ref={ref} className={styles["slide-ctn"]}>
            {isVisible &&
              data.map((dt) => (
                <a
                  key={`${type} - ${type === "games" ? dt.id : dt.mal_id}`}
                  className={styles.slide}
                  href={""}
                >
                  <div className={styles["img-wppr"]}>
                    <img
                      className={styles.img}
                      src={
                        type === "games"
                          ? dt?.background_image
                          : type === "anime-manga"
                          ? dt?.images?.webp?.image_url ||
                            dt?.images?.jpg?.image_url
                          : dt?.imgSrc
                      }
                      alt={`${type} - ${
                        type === "games"
                          ? dt?.name || dt?.name_original
                          : dt?.title || dt?.title_english
                      }`}
                    />
                  </div>
                </a>
              ))}
          </div>
        </div>

        <button className={styles}>
          {type === "games" ? (
            <GiIcon
              icon={gameIcons.playButton}
              style={{ transform: "rotateX(180deg)" }}
            />
          ) : (
            <FaIcon icon={fontAwesome.circleLeft} />
          )}
        </button>

        <button className={styles}>
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
