import { useQueries } from "@tanstack/react-query";
import { getAnimeById, getMangaById } from "../../services/api/jikan";

export const useJikanById = ({ type, ids }) => {
  const fetchFn =
    type === "animes" ? getAnimeById : type === "mangas" ? getMangaById : null;

  return useQueries({
    queries: !!type
      ? ids.map((id) => ({
          queryKey: [type, "Byid", id],
          queryFn: () => fetchFn(id),
          staleTime: 1000 * 60 * 30,
          retry: false,
          placeholderData: [],
          enabled: !!type, //  Só ativa se type tiver valor
        }))
      : [],
  });
};
