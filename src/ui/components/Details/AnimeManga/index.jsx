import { motion } from "framer-motion";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import YouTube from "react-youtube";
import FaIcon from "../../../../services/constants/icns/font-awesome/fontAwesome";
import fontAwesome from "../../../../services/constants/icns/font-awesome/iconNames";
import langSvg from "../../../../services/constants/svgs/lang";
import Footer from "../../Footer";
import styles from "./style.module.css";

export default function AnimeMangaDetails({ type, data }) {
  const { t } = useTranslation("animes-mangas", { useSuspense: true });
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

  /*
   * Função que lida com a cor do card de nota
   * Verde escuro - Excelente/Ótimo
   * Verde claro - Bom
   * Amarelo - Regular
   * Vermelho - Ruim
   * Cinza - Não possui nota
   */
  const handleLevelColor = () => {
    if (data.score >= 8.5) {
      return "var(--aux-01)";
    } else if (data.score < 8.5 && data.score >= 7.5) {
      return "var(--aux-02)";
    } else if (data.score < 7.5 && data.score >= 6) {
      return "var(--aux-03)";
    } else if (data.score < 6) {
      return "var(--aux-04)";
    } else {
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
          <motion.div
            className={styles.hdr}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            tabIndex={0}
          >
            <img
              src={data.images?.webp?.image_url || data.images?.jpg?.image_url}
              alt={`${type} - ${data.title || data.title_english}`}
              className={styles.cover}
              loading="lazy"
            />
            <div className={styles.infoCtn} tabIndex={0}>
              <div className={styles.txtCtn}>
                <div className={styles.ttlCtn}>
                  <h1 className={styles.ttl}>
                    {data.title || data.title_english}
                  </h1>

                  <div className={styles.altTtlCtn}>
                    <div className={styles.altLangCtn}>
                      <img
                        src={langSvg.eng}
                        alt={"English icon"}
                        className={styles.altLang}
                      />
                      <h2 className={styles.altTtl}>
                        {data.title_english || "?"}
                      </h2>
                    </div>

                    <div className={styles.altLangCtn}>
                      <img
                        src={langSvg.jp}
                        alt={"Japanese icon"}
                        className={styles.altLang}
                      />
                      <h2 className={styles.altTtl}>
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

              <div className={styles.scoreLvlCtn}>
                <div className={styles.scoreCtn}>
                  <span className={styles.scoreIcn}>
                    <FaIcon icon={fontAwesome.star} />
                  </span>
                  <p className={styles.score}>{data.score}</p>
                </div>

                <div
                  className={styles.scoreLvl}
                  style={{ "--bg-color": handleLevelColor() }}
                />
              </div>
            </div>
          </motion.div>

          <div className={styles.detailsCtn} tabIndex={0}>
            <motion.div
              className={styles.synpsCtn}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
              tabIndex={0}
            >
              <h2 className={`${styles.secTtl} ${styles.bdTtl}`}>
                {t("animesMangas.content.synopsis")}
              </h2>
              <p className={styles.bodyTxt}>{data.synopsis || "..."}</p>
            </motion.div>

            <motion.div
              className={styles.demoGenCtn}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
              tabIndex={0}
            >
              <div className={styles.demoCtn}>
                <h2 className={styles.secTtl}>
                  {t("animesMangas.content.demography")}
                </h2>
                <p className={styles.demo}>
                  {data.demographics[0]?.name || "..."}
                </p>
              </div>

              <div className={styles.demoCtn}>
                <h2 className={styles.secTtl}>
                  {t("animesMangas.content.type")}
                </h2>
                <p className={styles.demo}>{data.type || "..."}</p>
              </div>

              <div className={styles.genCtn}>
                <h2 className={styles.secTtl}>
                  {t("animesMangas.content.genre")}
                </h2>
                <div className={styles.genres}>
                  {data.genres.map((genre) => (
                    <p className={styles.gen}>{genre.name}</p>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.otherCtn}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
              tabIndex={0}
            >
              <h2 className={`${styles.secTtl} ${styles.bdTtl}`}>
                {t("animesMangas.content.other")}
              </h2>

              <div className={styles.otherInfo}>
                <motion.div className={styles.other}>
                  <h3 className={`${styles.otherTtl} ${styles.bdTtl}`}>
                    {type === "anime"
                      ? t("animesMangas.content.anime.studio")
                      : t("animesMangas.content.manga.author")}
                  </h3>
                  <p className={styles.bodyTxt}>
                    {type === "anime"
                      ? data.studios[0]?.name || "?"
                      : data.authors[0]?.name || "?"}
                  </p>
                </motion.div>

                <motion.div
                  className={styles.other}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className={`${styles.otherTtl} ${styles.bdTtl}`}>
                    {type === "anime"
                      ? t("animesMangas.content.anime.launchDate")
                      : t("animesMangas.content.manga.publication")}
                  </h3>
                  <p className={styles.bodyTxt}>
                    {type === "anime"
                      ? data.aired?.prop?.from?.year || "?"
                      : `${data.published?.prop?.from?.year || "?"} - ${
                          data.published?.prop?.to?.year || "?"
                        }`}
                  </p>
                </motion.div>

                <motion.div
                  className={styles.other}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className={`${styles.otherTtl} ${styles.bdTtl}`}>
                    Status
                  </h3>
                  <p className={styles.bodyTxt}>{data.status || "?"}</p>
                </motion.div>

                <motion.div className={styles.other}>
                  <h3 className={`${styles.otherTtl} ${styles.bdTtl}`}>
                    {type === "anime"
                      ? t("animesMangas.content.anime.episodes")
                      : t("animesMangas.content.manga.chapters")}
                  </h3>
                  <p className={styles.bodyTxt}>
                    {type === "anime"
                      ? data.episodes || "?"
                      : data.chapters || "?"}
                  </p>
                </motion.div>

                <motion.div
                  className={styles.other}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className={`${styles.otherTtl} ${styles.bdTtl}`}>
                    {t("animesMangas.content.popRank")}
                  </h3>
                  <p className={styles.bodyTxt}>
                    {`${data.popularity}º` || "?"}
                  </p>
                </motion.div>

                <motion.div
                  className={styles.other}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className={`${styles.otherTtl} ${styles.bdTtl}`}>
                    {t("animesMangas.content.scoreRank")}
                  </h3>
                  <p className={styles.bodyTxt}>{`${data.rank}º` || "?"}</p>
                </motion.div>
              </div>
            </motion.div>

            {type === "anime" && (
              <motion.div
                className={styles.trailerCtn}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={`${styles.trlrTtlCtn} ${styles.bdTtl}`}>
                  <h2 className={`${styles.secTtl}`}>Trailer</h2>
                  <span className={styles.trlrIcn}>
                    <FaIcon icon={fontAwesome.circlePlay} />
                  </span>
                </div>

                <div className={styles.trlrVidCtn}>
                  <YouTube
                    opts={trailerOpts}
                    videoId={data.trailer?.youtube_id}
                    className={styles.trlrVid}
                  />
                </div>
              </motion.div>
            )}

            <span className={styles.cpt}>{t("animesMangas.content.data")}</span>
          </div>
        </section>
      )}

      <Footer marginTop={128} />
    </div>
  );
}
