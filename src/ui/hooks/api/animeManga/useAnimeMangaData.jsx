import jikanIds from "../../../../services/constants/ids/jikanIds";
import { useJikanByFilter } from "./useJikanByFilter";
import { useJikanById } from "./useJikanById";

export const useAnimeMangaData = (type) => {
  // Definição dos filtros para mapping
  const filters = [
    { filter: "bypopularity", size: 12, key: "pop" },
    { filter: "", size: 12, key: "score" },
  ];

  const queries = useJikanByFilter({ type, filters });
  const [popularity, mostScored] = queries.map((q) => q.data ?? []);

  const sectionIds = jikanIds[type === "animes" ? "anime" : "manga"];
  const sections = {
    watchedRecently: useJikanById({ type, ids: sectionIds.watchedRecently }),
    pendent: useJikanById({ type, ids: sectionIds.pendent }),
    finished: useJikanById({ type, ids: sectionIds.finished }),
    readingNow: useJikanById({ type, ids: sectionIds.readingNow }),
    favorite: useJikanById({ type, ids: sectionIds.favorites }),
  };

  return {
    popularity,
    mostScored,
    sections,
  };
};
