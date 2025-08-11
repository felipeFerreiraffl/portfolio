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
  const { t } = useTranslation();

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
      <button
        className={styles.logo}
        onClick={openColor}
        title={t("header.aria.theme")}
        aria-label={t("header.aria.theme")}
      >
        <img src={images.logo} alt="Logo" />
      </button>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#" title="Intro" aria-label="Intro">
              Intro
            </a>
          </li>
          <li>
            <a
              href="#"
              title={t("header.skills")}
              aria-label={t("header.skills")}
            >
              {t("header.skills")}
            </a>
          </li>
          <li>
            <a
              href="#"
              title={t("header.experience")}
              aria-label={t("header.experience")}
            >
              {t("header.experience")}
            </a>
          </li>
          <li>
            <a
              href="#"
              title={t("header.projects")}
              aria-label={t("header.projects")}
            >
              {t("header.projects")}
            </a>
          </li>
          <li>
            <a
              href="#"
              title={t("header.contacts")}
              aria-label={t("header.contacts")}
            >
              {t("header.contacts")}
            </a>
          </li>
        </ul>
      </nav>

      <button
        className={styles.translation}
        onClick={openLng}
        title={t("header.aria.language")}
        aria-label={t("header.aria.language")}
      >
        <Icon icon={icons.remix.common.translate2} />
      </button>

      {colorDropdown && (
        <span
          ref={colorDropdownRef}
          className={styles.colorDrop}
          aria-hidden="false"
        >
          <ColorDropdown />
        </span>
      )}

      {lngDropdown && (
        <span
          ref={lngDropdownRef}
          className={styles.languageDrop}
          aria-hidden="false"
        >
          <LanguageDropdown />
        </span>
      )}
    </header>
  );
}
