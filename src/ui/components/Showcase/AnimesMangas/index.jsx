import useEmblaCarousel from "embla-carousel-react";
import FaIcon from "../../../../services/constants/icns/font-awesome/fontAwesome";
import styles from "./style.module.css";

export default function AnimesMangasShowcase({
  type,
  flexDirection,
  alignItems,
  title,
  desc,
  icon,
  data = [],
  href,
}) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
  });

  return (
    <div
      className={styles.ctn}
      style={{ "--flex-direc": flexDirection, "--align-items": alignItems }}
    >
      <div className={styles["cont-ctn"]}>
        <div
          className={styles["txt-ctn"]}
          style={{ textAlign: alignItems === "flex-start" ? "start" : "end" }}
        >
          <h2 className={styles.ttl}>{title}</h2>
          <p className={styles.desc}>{desc}</p>
        </div>
        <span className={styles.icn}>{<FaIcon icon={icon} />}</span>
      </div>
      <div className={styles.crsl}>
        <div className={styles["slide-wppr"]} ref={emblaRef}>
          <div className={styles["slides-ctn"]}>
            {data.map((dt) => (
              <a key={dt.mal_id} className={styles.slide} href={href}>
                <div className={styles["img-wppr"]}>
                  <img
                    src={dt.images.webp.image_url || dt.images.jpg.image_url}
                    alt={
                      `${type} - ${dt.title}` || `${type} - ${dt.title_english}`
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
