import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import MainButton from "../Button/Main";
import SecondaryButton from "../Button";

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
      <div className={styles.cont}>
        <h2
          className={styles.ttl}
          style={{ "--font": font, "--mb-font": mbFont, "--color": color }}
        >
          {t("final.title")}
        </h2>
        <div className={styles["btn-ctn"]}>
          <MainButton
            color={
              color === "var(--main-02)" ? "var(--main-01)" : "var(--main-04)"
            }
            text={t("final.mainButton")}
            onClick={scrollToTop}
          />

          <SecondaryButton
            color={"var(--main-01)"}
            border={"var(--bd-mn1)"}
            text={t("final.secButton")}
            href={"/hobbies"}
          />
        </div>
      </div>
    </div>
  );
}
