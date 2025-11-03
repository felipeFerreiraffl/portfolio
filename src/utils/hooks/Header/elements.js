/* ---------- Funções - Dropdowns ---------- */

import gsap from "gsap";

// Abre o dropdown (define estado como true)
export const handleOpen = (setter) => {
  setter(true);
};

// Abre o dropdown (define estado como false)
export const handleClose = (setter) => {
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

// Configurações do GSAP do menu
export function handleMenuGSAP(ref, state) {
  if (state && ref.current) {
    gsap.set(ref.current, { y: "-100%" });
    gsap.to(ref.current, { y: 0, duration: 0.6, ease: "power1.inOut" });
  }
}

// Gera a animação de entrada ou saída
export function handleDropdownAnimation(ref, handler, direction = "left") {
  const exitAnimation = (element) => {
    return gsap.to(element, {
      opacity: 0,
      y: -16,
      x: direction === "left" ? -16 : 16,
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  // Gera a animação antes de fechar, caso não tenha feito
  if (ref.current) {
    exitAnimation(ref.current, direction).then(() => {
      handler();
    });
  } else {
    handler();
  }
}
// Gera a animação de entrada ou saída do menu
export function handleMenuAnimation(ref, handler) {
  const exitAnimation = (element) => {
    return gsap.to(element, {
      y: "-100%",
      duration: 0.6,
      ease: "power1.inOut",
    });
  };

  // Gera a animação antes de fechar, caso não tenha feito
  if (ref.current) {
    exitAnimation(ref.current).then(() => {
      handler();
    });
  } else {
    handler();
  }
}
