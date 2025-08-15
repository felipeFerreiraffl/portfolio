import gsap from "gsap";
import styles from "./styles.module.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Hero() {
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
          className={`${styles.ring} ${styles[`ring${i + 1}`]}`}
          ref={(el) => (ringRefs.current[i] = el)}
        ></div>
      ))}

      <div className={styles.name}>Felipe Ferreira Lima</div>

      <div className={styles.orbitDotContainer}>
        <div className={styles.orbitDot}></div>
      </div>
    </div>
  );
}
