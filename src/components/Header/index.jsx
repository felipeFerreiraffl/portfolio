/* ---------- Componente - Header ---------- */

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  handleClose,
  handleDropdownAnimation,
  handleDropdownGSAP,
  handleMenuAnimation,
  handleMenuGSAP,
  handleOpen,
} from "../../services/utils/hooks/Header/elements";
import { useClickOutside } from "../../services/utils/hooks/Header/useClickOutside";
import icons from "../../services/utils/jsons/icons";
import images from "../../services/utils/jsons/images";
import ColorDropdown from "./Dropdown/Color";
import LanguageDropdown from "./Dropdown/Language";
import styles from "./styles.module.css";

export default function Header() {
  // Tradução i18next
  const { t } = useTranslation("common");

  // Estados para definir se está aberto ou fechado
  const [colorDropdown, setColorDropdown] = useState(false);
  const [lngDropdown, setLngDropdown] = useState(false);

  // Estados do menu aberto ou fechado
  const [menuHeaderOpen, setMenuHeaderOpen] = useState(false);

  // Refs para o DOM e GSAP
  const colorDropdownRef = useRef(null);
  const lngDropdownRef = useRef(null);
  const menuRef = useRef(null);

  // Funções que separam os handlers
  const openColor = () => handleOpen(setColorDropdown);
  const closeColor = () => handleClose(setColorDropdown);
  const openLng = () => handleOpen(setLngDropdown);
  const closeLng = () => handleClose(setLngDropdown);
  const closeMenu = () => handleClose(setMenuHeaderOpen);

  /* ----- Monta as animações do GSAP para os dropdowns ----- */
  // Cor
  useEffect(() => {
    handleDropdownGSAP(colorDropdownRef, colorDropdown, { x: -16 });
  }, [colorDropdown]);

  // Linguagem
  useEffect(() => {
    handleDropdownGSAP(lngDropdownRef, lngDropdown, { x: 16 });
  }, [lngDropdown]);

  // Menu
  useEffect(() => {
    handleMenuGSAP(menuRef, menuHeaderOpen);
  }, [menuHeaderOpen]);

  // Animações de saída dos dropdowns
  const closeColorAnimation = () => {
    handleDropdownAnimation(colorDropdownRef, closeColor, "left");
  };
  const closeLngAnimation = () => {
    handleDropdownAnimation(lngDropdownRef, closeLng, "right");
  };
  const closeMenuAnimation = () => {
    handleMenuAnimation(menuRef, closeMenu);
  };

  // Parâmetros para a função de clicar fora do elemento dropdown e menu (mobile e tablet)
  const refs = [colorDropdownRef, lngDropdownRef, menuRef];
  const handlers = [closeColorAnimation, closeLngAnimation, closeMenuAnimation];

  useClickOutside(refs, handlers);

  return (
    <header className={styles.header}>
      <button
        className={styles.logo}
        onClick={openColor}
        title={t("tooltip.theme")}
        aria-label={t("tooltip.theme")}
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
              title={t("navbar.skills")}
              aria-label={t("navbar.skills")}
            >
              {t("navbar.skills")}
            </a>
          </li>
          <li>
            <a
              href="#"
              title={t("navbar.experience")}
              aria-label={t("navbar.experience")}
            >
              {t("navbar.experience")}
            </a>
          </li>
          <li>
            <a
              href="#"
              title={t("navbar.projects")}
              aria-label={t("navbar.projects")}
            >
              {t("navbar.projects")}
            </a>
          </li>
          <li>
            <a
              href="#"
              title={t("navbar.contacts")}
              aria-label={t("navbar.contacts")}
            >
              {t("navbar.contacts")}
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.menuContainer}>
        <button
          className={styles.translation}
          onClick={openLng}
          title={t("tooltip.language")}
          aria-label={t("tooltip.language")}
        >
          <Icon icon={icons.remix.common.translate2} />
        </button>

        <button
          className={styles.menuIcon}
          onClick={() => setMenuHeaderOpen(true)}
        >
          <Icon icon={icons.remix.common.menu3} />
        </button>
      </div>

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

      {menuHeaderOpen && (
        <>
          <div className={styles.overlay}></div>
          <nav className={styles.menu} ref={menuRef}>
            <ul>
              <li>
                <a href="#">Intro</a>
                <div className={styles.divisor}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  title={t("navbar.skills")}
                  aria-label={t("navbar.skills")}
                >
                  {t("navbar.skills")}
                </a>
                <div
                  className={styles.divisor}
                  title="Intro"
                  aria-label="Intro"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  title={t("navbar.experience")}
                  aria-label={t("navbar.experience")}
                >
                  {t("navbar.experience")}
                </a>
                <div className={styles.divisor}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  title={t("navbar.projects")}
                  aria-label={t("navbar.projects")}
                >
                  {t("navbar.projects")}
                </a>
                <div className={styles.divisor}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  title={t("navbar.contacts")}
                  aria-label={t("navbar.contacts")}
                >
                  {t("navbar.contacts")}
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
