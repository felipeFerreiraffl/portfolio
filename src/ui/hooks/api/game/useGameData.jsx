import rawgIds from "../../../../services/constants/ids/rawgIds";
import { useRawgByFilter } from "./useRawgByFilter";
import { useRawgById } from "./useRawgById";

export const useGameData = () => {
  const filters = [
    { filter: "-added", pageSize: 12, key: "pop" },
    { filter: "-rating" || "-metacritic", pageSize: 12, key: "rating" },
  ];

  const queries = useRawgByFilter({ filters });
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
