import gsap from "gsap";
import styles from "./styles.module.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation("common");
  const ringRefs = useRef([]);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      ringRefs.current.forEach((ring, i) => {
        tl.fromTo(
          ring,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.3 + i * 0.2 },
          i * 0.2
        );
      });
    },
    { scope: ringRefs }
  );

  return (
    <div className={styles.container}>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={styles.ring}
          ref={(el) => (ringRefs.current[i] = el)}
        ></div>
      ))}

      <div className={styles.titleContainer}>
        <h1>Felipe Ferreira Lima</h1>
        <p>Portfólio profissional</p>
      </div>

      <a
        href="/archives/programmer_cv.pdf"
        target="_blank"
        title={t("button_labels.curriculum_vitae")}
        aria-label={t("button_labels.curriculum_vitae")}
      >
        <p>{t("button_labels.curriculum_vitae")}</p>
      </a>
    </div>
  );
}
