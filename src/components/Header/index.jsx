import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import icons from "../../services/utils/icons";
import images from "../../services/utils/images";
import ColorDropdown from "./Dropdown/Color";
import LanguageDropdown from "./Dropdown/Language";
import styles from "./styles.module.css";
import gsap from "gsap";

export default function Header() {
  const [colorDropdown, setColorDropdown] = useState(false);
  const [lgnDropdown, setLgnDropdown] = useState(false);
  const { t } = useTranslation("translation");
  const colorDropdownRef = useRef(null);
  const lgnDropdownRef = useRef(null);

  const handleOpenColorDropdown = () => {
    setColorDropdown(true);
  };

  const handleCloseColorDropdown = () => {
    setColorDropdown(false);
  };

  const handleOpenLgnDropdown = () => {
    setLgnDropdown(true);
  };

  const handleCloseLgnDropdown = () => {
    setLgnDropdown(false);
  };

  // Evento que fecha ao clicar fora do dropdown
  useEffect(() => {
    const clickOutside = (e) => {
      if (
        colorDropdownRef.current &&
        !colorDropdownRef.current.contains(e.target)
      ) {
        handleCloseColorDropdown(); // Fecha caso o dropdown de cor esteja aberto
      } else if (
        lgnDropdownRef.current &&
        !lgnDropdownRef.current.contains(e.target)
      ) {
        handleCloseLgnDropdown(); // Fecha caso o dropdown de linguagem esteja aberto
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  // Animação de entrada e saída dos dropdowns
  useGSAP(
    () => {
      gsap.fromTo(
        colorDropdownRef.current,
        {
          y: -20,
          x: -20,
          opacity: 0,
          ease: "power1.inOut",
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          ease: "power1.inOut",
        }
      );
    },
    { scope: colorDropdown }
  );

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
        <span ref={colorDropdownRef} className={styles.colorDrop}>
          <ColorDropdown />
        </span>
      )}

      {lgnDropdown && (
        <span ref={lgnDropdownRef} className={styles.languageDrop}>
          <LanguageDropdown />
        </span>
      )}
    </header>
  );
}
