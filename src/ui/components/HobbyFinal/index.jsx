import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MainButton from "../Button/Main";
import SecondaryButton from "../Button/Secondary";
import styles from "./style.module.css";

export default function HobbyFinal({ img, alt, color, font, mbFont }) {
  const { t } = useTranslation("hobbies", { useSuspense: true });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.ctn}>
      <img
        src={img}
        alt={alt}
        className={styles.img}
        style={{
          filter: `drop-shadow(${
            color === "var(--main-02)"
              ? "var(--bshw-led-mn2)"
              : "var(--bshw-led-mn5)"
          })`,
        }}
      />
      <motion.div
        className={styles.cont}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2
          className={styles.ttl}
          style={{ "--font": font, "--mb-font": mbFont, "--color": color }}
        >
          {t("hobbies.final.title")}
        </h2>
        <div className={styles.btnCtn}>
          <MainButton
            color={
              color === "var(--main-02)" ? "var(--main-01)" : "var(--main-04)"
            }
            text={t("hobbies.final.mainButton")}
            onClick={scrollToTop}
          />

          <SecondaryButton
            color={
              color === "var(--main-02)" ? "var(--main-01)" : "var(--main-04)"
            }
            border={
              color === "var(--main-02)" ? "var(--bd-mn1)" : "var(--bd-mn4)"
            }
            text={t("hobbies.final.secButton")}
            href={"/hobbies"}
          />
        </div>
      </motion.div>
    </div>
  );
}
