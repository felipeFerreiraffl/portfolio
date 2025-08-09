import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import icons from "../../services/utils/icons";
import images from "../../services/utils/images";
import i18n from "../../services/i18n";
import styles from "./styles.module.css";
import { useState } from "react";
import ColorDropdown from "./Dropdown/Color";

export default function Header() {
  const [colorDropdown, setColorDropdown] = useState(false);
  const [lgnDropdown, setLgnDropdown] = useState(false);
  const { t } = useTranslation();

  const handleOpenColorDropdown = () => {
    setColorDropdown(true);
  };

  const handleCloseColorDropdown = () => {
    setColorDropdown(false);
  };

  const handleOpenLgnDropdown = () => {
    setColorDropdown(true);
  };

  const handleCloseLgnDropdown = () => {
    setLgnDropdown(false);
  };

  console.log(`Color: ${colorDropdown}`);
  console.log(`Linguagem: ${lgnDropdown}`);

  return (
    <header className={styles.header}>
      <button className={styles.logo} onClick={handleOpenColorDropdown}>
        <img src={images.logo} alt="Logo" />
      </button>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="">Intro</a>
          </li>
          <li>
            <a href="#">{t("parts.skills")}</a>
          </li>
          <li>
            <a href="#">{t("parts.experience")}</a>
          </li>
          <li>
            <a href="#">{t("parts.projects")}</a>
          </li>
          <li>
            <a href="#">{t("parts.contacts")}</a>
          </li>
        </ul>
      </nav>

      <button className={styles.translation} onClick={handleOpenLgnDropdown}>
        <Icon icon={icons.remix.common.translate2} />
      </button>

      {colorDropdown && (
        <span className={styles.colorDrop}>
          <ColorDropdown />
        </span>
      )}
    </header>
  );
}
