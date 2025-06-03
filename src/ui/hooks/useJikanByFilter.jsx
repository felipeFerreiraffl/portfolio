import { useQueries } from "@tanstack/react-query";
import { getAnimeByFilter, getMangaByFilter } from "../../services/api/jikan";

// Hook para o fetch dos filtros
export const useJikanByFilter = ({ type, filters }) => {
  const fetchFn = type === "animes" ? getAnimeByFilter : getMangaByFilter;

  // Utiliza queries em paralelo dependendo do tipo (animes ou mangás)
  return useQueries({
    queries: filters.map(({ filter, size, key }) => ({
      queryKey: [type, filter, size, key],
      queryFn: () => fetchFn(filter, size),
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
      retry: false,
      placeholderData: [],
      enabled: !!type, //  Só ativa se type tiver valor
    })),
  });
};
