import { useQuery } from "@tanstack/react-query";
import { getDrawings } from "../../../../services/api/other";

export const useDrawingsData = () => {
  return useQuery({
    queryKey: ["drawings"],
    queryFn: getDrawings,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    retry: true,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 5000),
    placeholderData: [],
    enabled: !!getDrawings,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};
