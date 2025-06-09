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
                      starNum <= data.rating
                        ? 100
                        : starNum - 1 < data.rating
                        ? (data.rating - (starNum - 1)) * 100
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
