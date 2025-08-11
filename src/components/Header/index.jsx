import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import icons from "../../services/utils/jsons/icons";
import images from "../../services/utils/jsons/images";
import ColorDropdown from "./Dropdown/Color";
import LanguageDropdown from "./Dropdown/Language";
import styles from "./styles.module.css";
import gsap from "gsap";
import {
  handleCloseDropdown,
  handleOpenDropdown,
} from "../../services/utils/hooks/Header/closeDropdown";
import { useClickOutside } from "../../services/utils/hooks/Header/useClickOutside";

export default function Header() {
  // Tradução
  const { t } = useTranslation("translation");

  // Estados para definir se está aberto ou fechado
  const [colorDropdown, setColorDropdown] = useState(false);
  const [lngDropdown, setLngDropdown] = useState(false);

  // Estados para definir se renderizado ou não
  const [renderColorDropdown, setRenderColorDropdown] = useState(false);
  const [renderLngDropdown, setRenderLngDropdown] = useState(false);

  // Refs para o DOM e GSAP
  const colorDropdownRef = useRef(null);
  const lngDropdownRef = useRef(null);

  // Funções que separam os handlers
  const openColor = () => handleOpenDropdown(setColorDropdown);
  const closeColor = () => handleCloseDropdown(setColorDropdown);
  const openLng = () => handleOpenDropdown(setLngDropdown);
  const closeLng = () => handleCloseDropdown(setLngDropdown);

  // Parâmetros para a função de clicar fora do elemento dropdown
  const refs = [colorDropdownRef, lngDropdownRef];
  const handlers = [closeColor, closeLng];

  useClickOutside(refs, handlers);

  // Animação de entrada dos dropdowns
  useGSAP(() => {
    if (colorDropdown && colorDropdownRef.current) {
      gsap.fromTo(
        colorDropdownRef.current,
        { y: -16, x: -16, opacity: 0, ease: "power1.inOut", duration: 0.3 },
        { y: 0, x: 0, opacity: 1, ease: "power1.inOut", duration: 0.3 }
      );
    }

    if (lngDropdown && lngDropdownRef.current) {
      gsap.fromTo(
        lngDropdownRef.current,
        { y: -16, x: 16, opacity: 0, ease: "power1.inOut", duration: 0.3 },
        { y: 0, x: 0, opacity: 1, ease: "power1.inOut", duration: 0.3 }
      );
    }
  }, [colorDropdown, lngDropdown]);

  // // Animação de saída dos dropdowns
  // useEffect(() => {
  //   // Verificação do elemento estar montado para realizar a animação
  //   if (colorDropdown) {
  //     setRenderColorDropdown(true);
  //   } else if (renderColorDropdown) {
  //     gsap.to(colorDropdownRef.current, {
  //       y: -16,
  //       x: -16,
  //       opacity: 0,
  //       ease: "power1.inOut",
  //       duration: 0.3,
  //       onComplete: () => setRenderColorDropdown(false),
  //     });
  //   }

  //   if (lngDropdown) {
  //     setRenderLngDropdown(true);
  //   } else if (renderLngDropdown) {
  //     gsap.to(lngDropdownRef.current, {
  //       y: -16,
  //       x: 16,
  //       opacity: 0,
  //       ease: "power1.inOut",
  //       duration: 0.3,
  //       onComplete: () => setRenderLngDropdown(false),
  //     });
  //   }
  // }, [colorDropdown, lngDropdown]);

  return (
    <header className={styles.header}>
      <button className={styles.logo} onClick={openColor}>
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

      <button className={styles.translation} onClick={openLng}>
        <Icon icon={icons.remix.common.translate2} />
      </button>

      {colorDropdown && (
        <span ref={colorDropdownRef} className={styles.colorDrop}>
          <ColorDropdown />
        </span>
      )}

      {lngDropdown && (
        <span ref={lngDropdownRef} className={styles.languageDrop}>
          <LanguageDropdown />
        </span>
      )}
    </header>
  );
}
