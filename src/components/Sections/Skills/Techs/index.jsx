import Skill from "../Skill";
import styles from "./styles.module.css";
import { ReactComponent as IconEx } from "../../../../assets/svgs/icons/typescript.svg";

export default function Techs({ title, techs = [], alignSelf }) {
  return (
    <div className={styles.container} style={{ "--align-self": alignSelf }}>
      <div className={styles.mainContent}>
        <div className={styles.symbolContainer}>
          <span className={styles.diamond}></span>
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
