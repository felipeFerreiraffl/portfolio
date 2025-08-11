/* ---------- Função de fechar dropdown ao clicar fora ---------- */

import { useEffect } from "react";

export function useClickOutside(refs, handlers) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      refs.forEach((ref, i) => {
        // Analisa se o dropdown está visível e se foi clicado fora do elemento
        if (ref.current && !ref.current.contains(e.target)) {
          handlers[i](); // Trata os handlers dependendo do contexto
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [refs, handlers]);
}
