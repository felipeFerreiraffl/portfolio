import { motion } from "framer-motion";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import GiIcon from "../../../../services/constants/icns/game-icons/gameIcons";
import gameIcons from "../../../../services/constants/icns/game-icons/iconNames";
import styles from "./style.module.css";

export default function GameDetails({ data }) {
  const { t } = useTranslation("games", { useSuspense: true });
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

  /*
   * Função que lida com a cor do card de Metacritic
   * Verde escuro - Excelente/Ótimo
   * Verde claro - Bom
   * Amarelo - Regular
   * Vermelho - Ruim
   * Cinza - Não possui nota
   */
  const handleMetacriticColor = () => {
    let metacritic = data.metacritic;

    if (metacritic >= 85) {
      return "var(--aux-01)";
    } else if (metacritic < 85 && metacritic >= 75) {
      return "var(--aux-02)";
    } else if (metacritic < 75 && metacritic >= 60) {
      return "var(--aux-03)";
    } else if (metacritic < 60) {
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
            <GiIcon icon={gameIcons.circleClaws} />
          </span>
        </div>
      ) : (
        <section className={styles.cont}>
          <motion.div
            className={styles.hdr}
            style={{ "--bg-image": `url(${data.background_image_additional})` }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img
              src={data?.background_image}
              alt={data?.name || data?.name_original || "?"}
              className={styles.cover}
            />
            <div className={styles.mnInfosCtn}>
              <div className={styles.txtCtn}>
                <h1 className={styles.ttl}>
                  {data?.name || data?.name_original || "...?"}
                </h1>
                <p className={styles.dev}>{data?.developers[0]?.name || "?"}</p>
              </div>
              <div className={styles.scoreCtn}>
                <div className={styles.ratingCtn}>
                  {Array.from({ length: 5 }).map((_, i) => {
                    // Deixa com a quantidade exata de estrelas que o jogo possui
                    const starNum = i + 1;

                    /**
                     * Porcentagem da estrela preenchida
                     * 100% se estiver menor ou igual ao valor inteiro
                     * Parcialmente caso seja a próxima após o número inteiro
                     * Ex: 4.6 -> A última estrela fica com 60% de preenchimento ((4.2 - 4) * 100)
                     */
                    const porcentage =
                      starNum <= data?.rating
                        ? 100
                        : starNum - 1 < data?.rating
                        ? (data?.rating - (starNum - 1)) * 100
                        : 0;

                    return (
                      <div key={i} className={styles.starCtn}>
                        <span className={`${styles.star} ${styles.normal}`}>
                          <GiIcon icon={gameIcons.alliedStar} />
                        </span>
                        <span
                          className={`${styles.star} ${styles.colored}`}
                          style={{
                            "--fill-width": `${porcentage}%`,
                          }}
                        >
                          <GiIcon icon={gameIcons.alliedStar} />
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p
                  className={styles.mtcrtc}
                  style={{ "--meta-color": handleMetacriticColor() }}
                  title="Metacritic"
                >
                  {data?.metacritic || "?"}
                </p>
              </div>
            </div>
          </motion.div>

          <div className={styles.infosCtn}>
            <motion.div
              className={styles.secCtn}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.infoTtlCtn}>
                <h2 className={styles.secTtl}>{t("games.content.desc")}</h2>
                <span className={styles.infoIcn}>
                  <GiIcon icon={gameIcons.foldedPaper} />
                </span>
              </div>

              <p className={styles.bodyTxt}>
                {data?.description_raw || "...?"}
              </p>
            </motion.div>

            <motion.div
              className={styles.secCtn}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.infoTtlCtn}>
                <h2 className={styles.secTtl}>{t("games.content.platform")}</h2>
                <span className={styles.infoIcn}>
                  <GiIcon icon={gameIcons.gameConsole} />
                </span>
              </div>

              <div className={styles.pltfmCtn}>
                {data?.platforms?.map((plat) => (
                  <p className={styles.pltfm}>{plat.platform?.name}</p>
                )) || "?"}
              </div>
            </motion.div>

            <motion.div
              className={styles.secCtn}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.infoTtlCtn}>
                <h2 className={styles.secTtl}>{t("games.content.genres")}</h2>
                <span className={styles.infoIcn}>
                  <GiIcon icon={gameIcons.dramaMasks} />
                </span>
              </div>

              <div className={styles.gnrCtn}>
                {data?.genres?.map((gen) => (
                  <p className={styles.gnr}>{gen?.name}</p>
                )) || "?"}
              </div>
            </motion.div>

            <motion.div
              className={styles.secCtn}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.infoTtlCtn}>
                <h2 className={styles.secTtl}>{t("games.content.other")}</h2>
                <span className={styles.infoIcn}>
                  <GiIcon icon={gameIcons.info} />
                </span>
              </div>

              <div className={styles.cmplmInfoCtn}>
                <motion.div
                  className={styles.other}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className={styles.otherTtl}>Metacritic</h3>
                  <p className={styles.bodyTxt}>{data?.metacritic || "?"}</p>
                </motion.div>

                <motion.div
                  className={styles.other}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className={styles.otherTtl}>
                    {t("games.content.score")}
                  </h3>
                  <p className={styles.bodyTxt}>{data?.rating || "?"} / 5</p>
                </motion.div>

                <motion.div
                  className={styles.other}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className={styles.otherTtl}>
                    {t("games.content.launchDate")}
                  </h3>
                  <p className={styles.bodyTxt}>{data?.released || "?"}</p>
                </motion.div>

                <motion.div
                  className={styles.other}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className={styles.otherTtl}>{t("games.content.dev")}</h3>
                  <p className={styles.bodyTxt}>
                    {data?.developers[0]?.name || "?"}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
