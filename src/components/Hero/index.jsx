import gsap from "gsap";
import styles from "./styles.module.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { useGSAPTimeline } from "../../utils/hooks/global/gsap";
import { ReactComponent as Bridge } from "../../assets/svgs/illustrations/hero-bridge.svg";

export default function Hero() {
  const { t } = useTranslation("common");
  const ringRefs = useRef([]);
  const buttonRingRefs = useRef([]);
  const buttonRingTl = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      ringRefs.current.forEach((ring, i) => {
        tl.fromTo(
          ring,
          { opacity: 0, scale: 0, xPercent: -50, yPercent: -50 },
          {
            opacity: 0.1,
            scale: 1,
            duration: 0.3 + i * 0.2,
            ease: "power1.inOut",
            xPercent: -50,
            yPercent: -50,
          },
          i * 0.2
        );
      });
    },
    { scope: ringRefs }
  );

  useGSAPTimeline(
    buttonRingTl,
    buttonRingRefs,
    { opacity: 0, scale: 0, xPercent: -50, yPercent: -50 },
    {
      opacity: 0.2,
      scale: 1,
      duration: 0.3,
      ease: "power1.inOut",
      xPercent: -50,
      yPercent: -50,
    },
    0.15
  );

  const btnRingPlay = () => buttonRingTl.current.play();
  const btnRingReverse = () => buttonRingTl.current.reverse();

  return (
    <div className={styles.container}>
      {[...Array(11)].map((_, i) => (
        <div
          key={i}
          className={styles.ring}
          ref={(el) => (ringRefs.current[i] = el)}
        ></div>
      ))}

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Felipe Ferreira Lima</h1>
        <p className={styles.desc}>{t("hero.subtitle")}</p>
      </div>

      <a
        className={styles.btn}
        href="/archives/programmer_cv.pdf"
        target="_blank"
        onMouseEnter={btnRingPlay}
        onMouseLeave={btnRingReverse}
        title={t("button_labels.curriculum_vitae")}
        aria-label={t("button_labels.curriculum_vitae")}
      >
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className={styles.btnRing}
            ref={(el) => (buttonRingRefs.current[i] = el)}
          ></div>
        ))}
        <p className={styles.label}>{t("button_labels.curriculum_vitae")}</p>
      </a>

      <Bridge className={styles.bridge} />
    </div>
  );
}
