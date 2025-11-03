/* ---------- Funções do Embla Carousel da seção de Habilidades ---------- */

// Configuração do useEmblaCarousel
export const useEmblaOptions = {
  align: "center",
};

// Busca os callbacks para seleção
export const getEmblaCallbacks = (
  emblaApi,
  setPrevDisabled,
  setNextDisabled,
  setSelectedIndex
) => {
  if (!emblaApi) return;

  setPrevDisabled(!emblaApi.canScrollPrev());
  setNextDisabled(!emblaApi.canScrollNext());
  setSelectedIndex(emblaApi.selectedScrollSnap());
};

// useEffect do Embla Carousel
export const emblaUseEffect = (emblaApi, func, setScrollSnaps) => {
  if (!emblaApi) return;

  emblaApi.reInit();
  func();
  setScrollSnaps(emblaApi.scrollSnapList());
  emblaApi.on("select", func);

  return () => emblaApi.off("select", func);
};
