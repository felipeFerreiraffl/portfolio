import { useQueries } from "@tanstack/react-query";
import { getGameByFilter } from "../../../../services/api/rawg";

export const useRawgByFilter = ({ filters = [] }) => {
  const fetchFn = getGameByFilter || null;

  return useQueries({
    queries: filters.map(({ ordering, pageSize, key }, index) => ({
      queryKey: ["game", ordering, pageSize, key],
      queryFn: async () => {
        if (index > 0) {
          const delay = Math.min(3000 * (index + 1), 10000);
          await new Promise((res) => setTimeout(res, delay));
        }

        try {
          const result = await fetchFn(ordering, pageSize);
          return result.results;
        } catch (error) {
          console.error(`Erro ao buscar requisição ${ordering}`, error);
          throw error;
        }
      },
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
      retry: (failureCount, error) => {
        if (error.response?.status === 429) {
          console.warn(`Rate limit (429) - Tentativa ${failureCount + 1}/2`);

          return failureCount < 1; // Tenta mais vezes em erros 429
        }

        if (error.response?.status >= 500) {
          console.warn(
            `Erro de servidor ${error.response.status} - Tentativa ${
              failureCount + 1
            }/3`
          );

          return failureCount < 2;
        }

        // Não faz retry em outros erros
        return false;
      },
      retryDelay: (attemptIndex, error) => {
        if (error?.message.includes("JSON")) {
          console.warn(
            `Erro de JSON detectado, tentando novamente.`,
            error.message
          );

          return Math.min(3000 * 2 ** attemptIndex, 15000);
        }

        if (error.response?.status === 429) {
          const delay = Math.min(60000 * Math.pow(2, attemptIndex), 12000);
          console.warn(`Rate limit detectado, aguardando ${delay / 1000}s...`);

          return delay; // Delay maior para erros 429
        }

        if (error.response?.status >= 500) {
          return Math.min(5000 * Math.pow(2, attemptIndex), 20000);
        }

        // 1s para outros casos
        return 1000;
      },
      placeholderData: [],
      enabled: !!filters.length > 0, //  Só ativa se filters for maior de 0
      refetchOnWindowFocus: false, // Evita refetch desnecessário
      refetchOnReconnect: false,
      refetchOnMount: false,
    })),
  });
};
