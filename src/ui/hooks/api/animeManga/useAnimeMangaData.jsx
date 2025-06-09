import jikanIds from "../../../../services/constants/ids/jikanIds";
import { useJikanByFilter } from "./useJikanByFilter";
import { useJikanById } from "./useJikanById";

export const useAnimeMangaData = (type) => {
  // Definição dos filtros para mapping
  const filters = [
    { filter: "bypopularity", size: 20, key: "pop" },
    { filter: "", size: 20, key: "score" },
  ];

  const queries = useJikanByFilter({ type, filters });
  const [popularity, mostScored] = queries.map((q) => q.data ?? []);

  // Definição de fetchs para IDs

  const loadSections = queries.every((q) => q.isSuccess || q.isError); // Carrega IDs apenas quando filtros já carregaram
  const sectionIds = jikanIds[type === "animes" ? "anime" : "manga"];

  // Construção de IDs baseado no tipo de conteúdo e de seção
  const sections = {
    watchedRecently: useJikanById({
      type: loadSections ? type : null,
      ids: sectionIds.watchedRecently || [],
    }),
    pendent: useJikanById({
      type: loadSections ? type : null,
      ids: sectionIds.pendent || [],
    }),
    finished: useJikanById({
      type: loadSections ? type : null,
      ids: sectionIds.finished || [],
    }),
    readingNow: useJikanById({
      type: loadSections ? type : null,
      ids: sectionIds.readingNow || [],
    }),
    favorite: useJikanById({
      type: loadSections ? type : null,
      ids: sectionIds.favorites || [],
    }),
  };

  return {
    popularity,
    mostScored,
    sections,
    isPending: queries.some((q) => q.isPending),
    hasError: queries.some((q) => q.isError),
  };
};
