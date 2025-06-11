import { useQuery } from "@tanstack/react-query";
import { getGameById } from "../../../../services/api/rawg";

export const useRawgById = ({ ids = [] }) => {
  const fetchFn = getGameById || null;

  const fetchAll = async () => {
    if (!fetchFn || !ids || ids.length === 0) {
      return [];
    }

    const results = [];
    const DELAY_BETWEEN_REQS = 2500; // 2,5 seg entre requisições

    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];

      try {
        const result = await fetchFn(id);

        if (result) {
          results.push(result);
        } else {
          console.warn(`Resultado nulo para ID ${id}`);
        }

        // Delay apenas se não for o último tiem
        if (id !== ids[ids.length - 1]) {
          await new Promise((res) => setTimeout(res, DELAY_BETWEEN_REQS));
        }
      } catch (error) {
        console.error(`Erro ao buscar ID ${id}: `, error);

        if (error.response?.status === 429) {
          console.warn("Rate limit detectado, aumentando delay..."); // Aumenta o delay caso aatinga rate limit
          await new Promise((res) => setTimeout(res, DELAY_BETWEEN_REQS * 2));
        }

        continue;
      }
    }

    return results.filter(Boolean); // Remove nulls
  };

  return useQuery({
    queryKey: ["game", "ids", ids],
    queryFn: fetchAll,
    staleTime: 1000 * 60 * 60 * 2,
    gcTime: 1000 * 60 * 60 * 24,
    retry: (failureCount, error) => {
      // Não faz retry em caso de erros 429, 404 ou 03
      if (
        error.response?.status === 429 ||
        error.response?.status === 404 ||
        error.response?.status === 403
      ) {
        console.error(`Erro ${error.response.status} detectado!`);
        return false;
      }

      return failureCount < 1; // Tenta repetir apenas uma vez
    },
    retryDelay: (attemptIndex) => Math.min(3000 * 2 ** attemptIndex, 10000),
    placeholderData: [],
    enabled: !!ids.length > 0,
    refetchOnWindowFocus: false, // Evita refetch desnecessário
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};
