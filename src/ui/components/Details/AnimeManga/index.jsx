import { useCallback, useEffect, useState } from "react";
import styles from "./style.module.css";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import FaIcon from "../../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../../services/constants/icns/font-awesome/iconNames";
import { useTranslation } from "react-i18next";
import langSvg from "../../../../services/constants/svgs/lang";

export default function AnimeMangaDetails({ type, data }) {
  const { t } = useTranslation("animes-mangas", { useSuspense: true });
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleInView = useCallback(
    debounce(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, 3000),
    [inView]
  );

  const handleLevelColor = () => {
    if (data.score >= 9) {
      return "var(--aux-01)";
    } else if (data.score < 9 && data.score >= 7.5) {
      return "var(--aux-02)";
    } else if (data.score < 7.5 && data.score >= 6.5) {
      return "var(--aux-03)";
    } else {
      return "var(--aux-04)";
    }
  };

  useEffect(() => {
    handleInView();
  }, [inView, handleInView]);

  return (
    <div ref={ref} className={styles.ctn}>
      {!isVisible ? (
        <div className={styles["load-ctn"]}>
          <span className={styles["load-spin"]}>
            <FaIcon icon={fontAwesome.spinner} />
          </span>
        </div>
      ) : (
        <section
          key={`${type} - ${data.mal_id}`}
          className={styles.cont}
          style={{
            "--bg-image": `url(${
              data.images?.webp?.image_url || data.images?.jpg?.image_url
            })`,
          }}
        >
          <div className={styles.hdr}>
            <img
              src={data.images?.webp?.image_url || data.images?.jpg?.image_url}
              alt={`${type} - ${data.title || data.title_english}`}
              className={styles.cover}
            />
            <div className={styles["info-ctn"]}>
              <div className={styles["txt-ctn"]}>
                <div className={styles["ttl-ctn"]}>
                  <h1 className={styles.ttl}>
                    {data.title || data.title_english}
                  </h1>

                  <div className={styles["alt-ttl-ctn"]}>
                    <div className={styles["alt-lang-ctn"]}>
                      <img
                        src={langSvg.eng}
                        alt={"English icon"}
                        className={styles["alt-lang"]}
                      />
                      <h2 className={styles["alt-ttl"]}>
                        {data.title_english || "?"}
                      </h2>
                    </div>

                    <div className={styles["alt-lang-ctn"]}>
                      <img
                        src={langSvg.jp}
                        alt={"Japanese icon"}
                        className={styles["alt-lang"]}
                      />
                      <h2 className={styles["alt-ttl"]}>
                        {data.title_japanese || "?"}
                      </h2>
                    </div>
                  </div>
                </div>

                <p className={styles.add}>
                  {type === "anime"
                    ? data.studios[0]?.name
                    : data.authors[0]?.name}
                </p>
              </div>

              <div className={styles["score-lvl-ctn"]}>
                <div className={styles["score-ctn"]}>
                  <span className={styles["score-icn"]}>
                    <FaIcon icon={fontAwesome.star} />
                  </span>
                  <p className={styles.score}>{data.score}</p>
                </div>

                <div
                  className={styles["score-lvl"]}
                  style={{ "--bg-color": handleLevelColor() }}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
