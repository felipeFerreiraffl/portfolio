import { useQuery } from "@tanstack/react-query";
import { getAnimeById, getMangaById } from "../../../../services/api/jikan";

export const useJikanBySpecificId = ({ type, id }) => {
  const fetchFn =
    type === "anime" ? getAnimeById : type === "manga" ? getMangaById : null;

  const fetchOneId = async () => {
    if (!fetchFn || !id) {
      return null;
    }

    try {
      const result = await fetchFn(id);
      return result;
    } catch (error) {
      console.error(`Erro ao buscar conteúdo com ID ${id}: `, error);
      throw error;
    }
  };

  return useQuery({
    queryKey: [type, "one", id],
    queryFn: fetchOneId,
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
    enabled: !!type && !!id,
    refetchOnWindowFocus: false, // Evita refetch desnecessário
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};
