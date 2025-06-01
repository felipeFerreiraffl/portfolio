import { useQueries } from "@tanstack/react-query";
import { getAnimeById, getMangaById } from "../../services/api/jikan";

export const useJikanById = ({ type, ids }) => {
  const fetchFn =
    type === "animes" ? getAnimeById : type === "mangas" ? getMangaById : null;

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const fetchWithDelay = async (ids) => {
    const results = [];

    for (const id of ids) {
      const { data } = await fetchFn(id);
      results.push(data);
      await delay(1500);
    }

    return results;
  };

  return useQueries({
    queries: !!type
      ? ids.map((id) => ({
          queryKey: [type, "Byid", id],
          queryFn: () => fetchWithDelay(ids),
          staleTime: 1000 * 60 * 30,
          retry: false,
          placeholderData: [],
          enabled: !!type, //  Só ativa se type tiver valor
        }))
      : [],
  });
};
