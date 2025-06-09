import rawgIds from "../../../../services/constants/ids/rawgIds";
import { useRawgByFilter } from "./useRawgByFilter";
import { useRawgById } from "./useRawgById";

// Hook para retornar os dados provenientes dos fetchs por ordem e ID da RAWG
export const useGameData = () => {
  const orderings = [
    { ordering: "-added", pageSize: 20, key: "pop" },
    { ordering: "-rating", pageSize: 100, key: "rating" },
  ];

  const queries = useRawgByFilter({ orderings });
  const [popularity, bestRated] = queries.map((q) => q.data ?? []);

  const sectionIds = rawgIds;

  const sections = {
    pastFuture: useRawgById({
      ids: sectionIds.recentFuture || [],
    }),
    favorite: useRawgById({
      ids: sectionIds.favorite || [],
    }),
  };

  return {
    popularity,
    bestRated,
    sections,
    isPending: queries.some((q) => q.isPending),
    hasError: queries.some((q) => q.isError),
  };
};
