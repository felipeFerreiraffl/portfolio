import { useQueries, useQuery } from "@tanstack/react-query";
import { getAnimeById, getMangaById } from "../../services/api/jikan";

export const useJikanById = ({ type, ids }) => {
  const fetchFn =
    type === "animes" ? getAnimeById : type === "mangas" ? getMangaById : null;

  // Promise para chamadas individuais
  const fetchAll = async () => {
    if (!fetchFn) return [];

    const results = [];

    for (const id of ids) {
      try {
        const result = await fetchFn(id);
        results.push(result);
      } catch (error) {
        console.error(`Erro ao buscar ID ${id}: `, error);
      }

      await new Promise((res) => setTimeout(res, 500));
    }

    return results;
  };

  return useQuery({
    queryKey: [type, "ids", ids],
    queryFn: fetchAll,
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    retry: false,
    placeholderData: [],
    enabled: !!type && ids.length > 0,
  });
};
