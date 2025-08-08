import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import icons from "../../services/utils/icons";
import images from "../../services/utils/images";
import i18n from "../../services/i18n";
import styles from "./styles.module.css";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={images.logo} alt="Logo" />
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="">Intro</a>
          </li>
          <li>
            <a href="#">{t("translation.parts.skills")}</a>
          </li>
          <li>
            <a href="#">{t("translation.parts.experience")}</a>
          </li>
          <li>
            <a href="#">{t("translation.parts.projects")}</a>
          </li>
          <li>
            <a href="#">{t("translation.parts.contacts")}</a>
          </li>
        </ul>
      </nav>

      <button className={styles.translation}>
        <Icon icon={icons.remix.common.translate2} />
      </button>
    </header>
  );
}
