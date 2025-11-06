import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { ReactComponent as IconEx } from "../../../../assets/svgs/icons/typescript.svg";
import { useGSAPFromTo } from "../../../../utils/hooks/global/gsap";
import Skill from "../Skill";
import styles from "./styles.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function Techs({ title, techs = [], alignSelf }) {
  const diamondRef = useRef(null);

  useGSAP(
    () =>
      useGSAPFromTo(
        diamondRef,
        { rotation: 0 },
        {
          rotation: 180,
          duration: 0.6,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: diamondRef.current,
            scrub: 1,
          },
        }
      ),
    { scope: diamondRef }
  );

  return (
    <div className={styles.container} style={{ "--align-self": alignSelf }}>
      <div className={styles.mainContent}>
        <div className={styles.symbolContainer}>
          <span ref={diamondRef} className={styles.diamond}></span>
          <span className={styles.circle}></span>
        </div>

        <h3 className={styles.title}>Título</h3>

        <div className={styles.skillsContainer}>
          <Skill name={"Habilidade 1"} icon={<IconEx />} />
          <Skill name={"Habilidade 1"} icon={<IconEx />} />
          <Skill name={"Habilidade 1"} icon={<IconEx />} />
          <Skill name={"Habilidade 1"} icon={<IconEx />} />
          <Skill name={"Habilidade 1"} icon={<IconEx />} />
          <Skill name={"Habilidade 1"} icon={<IconEx />} />
          <Skill name={"Habilidade 1"} icon={<IconEx />} />
        </div>
      </div>
    </div>
  );
}
