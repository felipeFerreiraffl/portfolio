import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { ReactComponent as IconEx } from "../../../../assets/svgs/icons/typescript.svg";
import { ReactComponent as Tree } from "../../../../assets/svgs/illustrations/skills-tree.svg";
import { useGSAPFromTo } from "../../../../utils/hooks/global/gsap";
import Skill from "../Skill";
import styles from "./styles.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function Techs({ title, techs = [], alignSelf }) {
  const diamondRef = useRef(null);
  const treeRef = useRef(null);

  const treeStyleProps = {
    "--tree-left":
      alignSelf === "flex-start"
        ? "auto"
        : "calc(-1 * 100vw + 100% + var(--spacing-size-40))",
    "--tree-left-tablet":
      alignSelf === "flex-start"
        ? "auto"
        : "calc(-1 * 100vw + 100% + var(--spacing-size-120))",
    "--tree-right":
      alignSelf === "flex-start"
        ? "calc(-1 * 100vw + 100% + var(--spacing-size-40))"
        : "auto",
    "--tree-right-tablet":
      alignSelf === "flex-start"
        ? "calc(-1 * 100vw + 100% + var(--spacing-size-120))"
        : "auto",
    "--tree-direction": alignSelf === "flex-start" ? "0deg" : "180deg",
  };

  useGSAP(
    () =>
      useGSAPFromTo(
        diamondRef,
        { rotation: 0, xPercent: -50, yPercent: -50 },
        {
          rotation: 180,
          duration: 0.6,
          ease: "power1.inOut",
          xPercent: -50,
          yPercent: -50,
          scrollTrigger: {
            trigger: diamondRef.current,
            scrub: 1,
          },
        }
      ),
    { scope: diamondRef }
  );

  useGSAP(
    () =>
      useGSAPFromTo(
        treeRef,
        {
          x: alignSelf === "flex-start" ? "100%" : "-100",
          yPercent: -50,
        },
        {
          x: 0,
          yPercent: -50,
          duration: 0.6,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: treeRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      ),
    { scope: treeRef }
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

      <Tree ref={treeRef} className={styles.tree} style={treeStyleProps} />
    </div>
  );
}
