import { useRef } from "react";
import { useGSAPTimeline } from "../../../../utils/hooks/global/gsap";
import styles from "./styles.module.css";

export default function SocialIcon({ type, icon, title, href, name }) {
  const ringRefs = useRef([]);
  const tl = useRef();

  useGSAPTimeline(
    tl,
    ringRefs,
    { opacity: 0, scale: 0 },
    {
      opacity: 0.4,
      scale: 1,
      duration: 0.3,
      ease: "power1.inOut",
    },
    0.15
  );

  const tlPlay = () => tl.current.play();
  const tlReverse = () => tl.current.reverse();

  return (
    <a
      className={styles.link}
      href={href}
      target="_blank"
      rel="noopener noreferer"
      onMouseEnter={tlPlay}
      onMouseLeave={tlReverse}
      title={title}
      aria-label={title}
    >
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className={`${styles.ring} ${styles[`ring${i + 1}`]}`}
          ref={(el) => (ringRefs.current[i] = el)}
        ></div>
      ))}
      <span className={styles.icon}>{icon}</span>
      <p className={styles.name}>{name}</p>
    </a>
  );
}
