import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useGSAPTimeline } from "../../../../utils/hooks/global/gsap";
import styles from "./styles.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function Skill({ name, icon }) {
  return (
    <div className={styles.container}>
      {[...Array(2)].map((_, i) => (
        <div key={i} className={styles.ring}></div>
      ))}

      <h3 className={styles.name}>{name}</h3>
      <span className={styles.icon}>{icon}</span>
    </div>
  );
}
