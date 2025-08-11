/* ---------- Componente - Header ---------- */

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  handleCloseDropdown,
  handleCloseDropdownAnimation,
  handleDropdownGSAP,
  handleOpenDropdown,
} from "../../services/utils/hooks/Header/closeDropdown";
import { useClickOutside } from "../../services/utils/hooks/Header/useClickOutside";
import icons from "../../services/utils/jsons/icons";
import images from "../../services/utils/jsons/images";
import ColorDropdown from "./Dropdown/Color";
import LanguageDropdown from "./Dropdown/Language";
import styles from "./styles.module.css";

export default function Header() {
  // Tradução i18next
  const { t } = useTranslation("translation");

  // Estados para definir se está aberto ou fechado
  const [colorDropdown, setColorDropdown] = useState(false);
  const [lngDropdown, setLngDropdown] = useState(false);

  // Refs para o DOM e GSAP
  const colorDropdownRef = useRef(null);
  const lngDropdownRef = useRef(null);

  // Funções que separam os handlers
  const openColor = () => handleOpenDropdown(setColorDropdown);
  const closeColor = () => handleCloseDropdown(setColorDropdown);
  const openLng = () => handleOpenDropdown(setLngDropdown);
  const closeLng = () => handleCloseDropdown(setLngDropdown);

  /* ----- Monta as animações do GSAP para os dropdowns ----- */
  // Cor
  useEffect(() => {
    handleDropdownGSAP(colorDropdownRef, colorDropdown, { x: -16 });
  }, [colorDropdown]);

  // Linguagem
  useEffect(() => {
    handleDropdownGSAP(lngDropdownRef, lngDropdown, { x: 16 });
  }, [lngDropdown]);

  // Animações de saída dos dropdowns
  const closeColorAnimation = () => {
    handleCloseDropdownAnimation(colorDropdownRef, closeColor, "left");
  };
  const closeLngAnimation = () => {
    handleCloseDropdownAnimation(lngDropdownRef, closeLng, "right");
  };

  // Parâmetros para a função de clicar fora do elemento dropdown
  const refs = [colorDropdownRef, lngDropdownRef];
  const handlers = [closeColorAnimation, closeLngAnimation];

  useClickOutside(refs, handlers);

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
