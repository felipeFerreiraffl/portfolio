import { useEffect, useState } from "react";

// Função que define o tempo mínimo de carregamento entre rotas
export function useMinTime(minTime) {
  const [isMinTimePassed, setIsMinTimePassed] = useState(false); // Estado que controla se o tempo mínimo de carregamento passou
  const [progress, setProgress] = useState(0); // Estado que controla o progresso da barra

  useEffect(() => {
    setIsMinTimePassed(false);
    setProgress(0);

    // Momento que inicia o carregamento
    const start = Date.now();

    const interval = setInterval(() => {
      // Define o quanto a barra avança
      setProgress((prev) => {
        const remaining = 100 - prev;
        const increment =
          remaining > 50
            ? Math.random() * (30 - 25) + 25 // Cresce mais rápido no início
            : Math.random() * (15 - 10) + 10; // Desacelera ao final da barra
        const next = Math.min(prev + increment, 100);
        return next;
      });

      // Caso o tempo acabe, o evento de carregamento acaba
      if (Date.now() - start >= minTime) {
        setIsMinTimePassed(true);
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [minTime]);

  return { isMinTimePassed, progress };
}
