/* ---------- Funções - Dropdowns ---------- */

import gsap from "gsap";

// Abre o dropdown (define estado como true)
export const handleOpenDropdown = (setter) => {
  setter(true);
};

// Abre o dropdown (define estado como false)
export const handleCloseDropdown = (setter) => {
  setter(false);
};

// Configurações do GSAP dos dropdowns
export function handleDropdownGSAP(ref, state, set = {}) {
  if (state && ref.current) {
    gsap.set(ref.current, {
      opacity: 0,
      y: -16,
      ...set,
    });
    gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.3,
      ease: "power1.inOut",
    });
  }
}

// Gera a animação de entrada ou saída
export function handleCloseDropdownAnimation(ref, handler, direction = "left") {
  const exitAnimation = (element) => {
    return gsap.to(element, {
      opacity: 0,
      y: -16,
      x: direction === "left" ? -16 : 16,
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  if (ref.current) {
    exitAnimation(ref.current, direction).then(() => {
      handler();
    });
  } else {
    handler();
  }
}
