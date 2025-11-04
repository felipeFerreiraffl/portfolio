import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../../services/context/themeContext";
import { useGSAPTimeline } from "../../../../utils/hooks/global/gsap";
import styles from "./styles.module.css";

export default function ColorDropdown() {
  const { theme, setColorTheme } = useContext(ThemeContext);
  const { t } = useTranslation("common");

  const lightRingRefs = useRef([]);
  const darkRingRefs = useRef([]);
  const lightTl = useRef(null);
  const darkTl = useRef(null);

  useGSAPTimeline(
    lightTl,
    lightRingRefs,
    { opacity: 0, scale: 0 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power1.inOut",
    },
    0.15
  );

  useGSAPTimeline(
    darkTl,
    darkRingRefs,
    { opacity: 0, scale: 0 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power1.inOut",
    },
    0.15
  );

  const lightTlPlay = () => lightTl.current.play();
  const lightTlReverse = () => lightTl.current.reverse();
  const darkTlPlay = () => darkTl.current.play();
  const darkTlReverse = () => darkTl.current.reverse();

  useEffect(() => {
    if (theme === "light") {
      lightTl.current.play(0);
      darkTl.current.reverse();
    } else {
      darkTl.current.play(0);
      lightTl.current.reverse();
    }
  }, [theme]);

  return (
    <div className={styles.container}>
      <button
        className={styles.colorBtn}
        onClick={() => setColorTheme("light")}
        onMouseEnter={theme !== "light" ? lightTlPlay : undefined}
        onMouseLeave={theme !== "light" ? lightTlReverse : undefined}
        title={t("tooltip.light")}
        aria-label={t("tooltip.light")}
        tabIndex={0}
      >
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className={`${styles.ring} ${styles.ringLight}`}
            ref={(el) => (lightRingRefs.current[i] = el)}
          ></div>
        ))}
        <div className={`${styles.circle} ${styles.light}`}></div>
      </button>

      <div
        className={styles.colorBtn}
        onClick={() => setColorTheme("dark")}
        onMouseEnter={theme !== "dark" ? darkTlPlay : undefined}
        onMouseLeave={theme !== "dark" ? darkTlReverse : undefined}
        title={t("tooltip.dark")}
        aria-label={t("tooltip.dark")}
        tabIndex={0}
      >
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className={`${styles.ring} ${styles.ringDark}`}
            ref={(el) => (darkRingRefs.current[i] = el)}
          ></div>
        ))}
        <div className={`${styles.circle} ${styles.dark}`}></div>
      </div>
    </div>
  );
}
