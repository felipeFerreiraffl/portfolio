/* ---------- Função para rolar até a seção desejada ---------- */

export function scrollToSection(sectionRef) {
  if (sectionRef?.current) {
    // Define um valor para o topo da seção (posição do topo do ref - offset)
    const top =
      sectionRef.current.getBoundingClientRect().top + window.scrollY - 120;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
}
