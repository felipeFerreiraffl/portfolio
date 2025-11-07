import styles from "./styles.module.css";
import { ReactComponent as IconEx } from "../../../../assets/svgs/icons/mysql.svg";
import images from "../../../../utils/images";
import { Icon } from "@iconify/react/dist/iconify.js";
import icons from "../../../../utils/icons";

export default function ProjectCard({ title, src, desc, techs = [] }) {
  return (
    <a
      href="#"
      rel="noopener noreferer"
      target="_blank"
      title={title}
      aria-label={title}
      className={styles.container}
    >
      <div className={styles.previewContainer}>
        <div className={styles.overlay}>
          <p className={styles.gitHub}>GitHub</p>
          <Icon icon={icons.remix.common.linkM} className={styles.gitHubIcon} />
        </div>

        <p className={styles.title}>{title}</p>
        <img src={src} alt={title} className={styles.image} loading="lazy" />
      </div>

      <p className={styles.description}>{desc}</p>

      <div className={styles.techsContainer}>
        {techs.map((tech, i) => (
          <div key={i} className={styles.tech}>
            <span className={styles.icon}>{tech.icon}</span>
          </div>
        ))}
      </div>
    </a>
  );
}
