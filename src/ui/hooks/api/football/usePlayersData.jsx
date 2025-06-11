import { useQuery } from "@tanstack/react-query";
import { getPlayers } from "../../../../services/api/other";

export const usePlayersData = () => {
  return useQuery({
    queryKey: ["players"],
    queryFn: getPlayers,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    retry: true,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 5000),
    placeholderData: [],
    enabled: !!getPlayers,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};
