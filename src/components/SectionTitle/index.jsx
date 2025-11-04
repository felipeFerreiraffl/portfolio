import { useRef } from "react";
import styles from "./styles.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useGSAPFromTo } from "../../utils/hooks/global/gsap";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger); // Ativação do Scroll Trigger

export default function SectionTitle({ title, subtitle }) {
  const lineRef1 = useRef(null);
  const lineRef2 = useRef(null);
  // const textRef = useRef(null);

  // Efeito de "esticamento" das linhas do título
  useGSAP(
    () => {
      useGSAPFromTo(
        lineRef1,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: lineRef1.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          }, // Referencia o que deve ativar na rolagem
        }
      );
    },
    { scope: lineRef1 }
  );
  useGSAP(
    () => {
      useGSAPFromTo(
        lineRef2,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: lineRef2.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          }, // Referencia o que deve ativar na rolagem
        }
      );
    },
    { scope: lineRef2 }
  );

  return (
    <div className={styles.container}>
      <div className={styles.mainTitleContainer}>
        <div className={styles.lineContainer}>
          <div
            className={`${styles.line} ${styles.lineLeft}`}
            ref={lineRef1}
          ></div>
          <div className={styles.diamond}></div>
        </div>
        <h2>{title}</h2>
        <div className={styles.lineContainer}>
          <div className={styles.diamond}></div>
          <div
            className={`${styles.line} ${styles.lineRight}`}
            ref={lineRef2}
          ></div>
        </div>
      </div>

      <p>{subtitle}</p>
    </div>
  );
}
