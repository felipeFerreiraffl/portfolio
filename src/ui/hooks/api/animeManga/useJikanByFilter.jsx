import { useQueries } from "@tanstack/react-query";
import {
  getAnimeByFilter,
  getMangaByFilter,
} from "../../../../services/api/jikan";

// Hook para o fetch dos filtros
export const useJikanByFilter = ({ type, filters = [] }) => {
  const fetchFn = type === "animes" ? getAnimeByFilter : getMangaByFilter;

  // Utiliza queries em paralelo dependendo do tipo (animes ou mangás)
  return useQueries({
    queries: filters.map(({ filter, size, key }, index) => ({
      queryKey: [type, filter, size, key],
      queryFn: async () => {
        if (index > 0) {
          await new Promise((res) => setTimeout(res, index * 1500)); // Delay de 1500ms entre requests
        }

        return fetchFn(filter, size);
      },
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
      retry: (failureCount, error) => {
        if (error.response?.status === 429) {
          return failureCount < 3; // Tenta mais vezes em erros 429
        }

        return failureCount < 2; // Tenta repetir duas vezes
      },
      retryDelay: (attemptIndex, error) => {
        if (error?.message.includes("JSON")) {
          return Math.min(3000 * 2 ** attemptIndex, 15000);
        }

        if (error.response?.status === 429) {
          return Math.min(2000 * 2 ** attemptIndex, 10000); // Delay maior para erros 429
        }

        return Math.min(1000 * 2 ** attemptIndex, 5000);
      },
      placeholderData: [],
      enabled: !!type, //  Só ativa se type tiver valor
    })),
  });
};
