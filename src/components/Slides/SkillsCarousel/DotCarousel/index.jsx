import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { useGSAPTimeline } from "../../../../services/utils/hooks/global/gsap";

export default function DotCarousel({ selected, onClick, title }) {
  const ringRefs = useRef([]);
  const tl = useRef();

  useGSAPTimeline(
    tl,
    ringRefs,
    { opacity: 0, scale: 0 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power1.inOut",
    },
    0.15
  );

  const tlPlay = () => tl.current.play();
  const tlReverse = () => tl.current.reverse();

  // Se selecionado, fica com os anéis ativos
  useEffect(() => {
    if (selected) {
      tl.current.play(0);
    } else {
      tl.current.reverse();
    }
  }, [selected]);

  return (
    <button
      className={styles.container}
      onClick={onClick}
      title={title}
      aria-label={title}
      tabIndex={0}
      onMouseEnter={!selected ? tlPlay : undefined}
      onMouseLeave={!selected ? tlReverse : undefined}
    >
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className={`${styles.ring} ${styles[`ring${i + 1}`]}`}
          ref={(el) => (ringRefs.current[i] = el)}
        ></div>
      ))}
      <div className={styles.dot}></div>
    </button>
  );
}
