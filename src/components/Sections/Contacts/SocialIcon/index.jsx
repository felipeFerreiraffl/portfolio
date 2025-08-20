import { useRef } from "react";
import styles from "./styles.module.css";
import { useGSAP } from "@gsap/react";
import {
  useGSAPConfigs,
  useGSAPTimeline,
} from "../../../../services/utils/hooks/global/gsap";
import gsap from "gsap";

export default function SocialIcon({ icon, title, href }) {
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
      <span>{icon}</span>
    </a>
  );
}
