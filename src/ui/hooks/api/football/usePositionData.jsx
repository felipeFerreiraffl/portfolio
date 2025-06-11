import { useQuery } from "@tanstack/react-query";
import { getPositions } from "../../../../services/api/other";

export const usePositionData = () => {
  return useQuery({
    queryKey: ["position"],
    queryFn: getPositions,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    retry: true,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 5000),
    placeholderData: [],
    enabled: !!getPositions,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};
