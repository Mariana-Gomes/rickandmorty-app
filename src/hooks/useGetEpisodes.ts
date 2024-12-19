import { getEpisodes } from "@/services/getEpisodes";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetEpisodes = () => {
  const MAX_NUM_OF_PAGES = 3;

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["episodes"],
    queryFn: getEpisodes,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.nextPage > MAX_NUM_OF_PAGES) return;
      return lastPage.nextPage;
    },
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};

export default useGetEpisodes;
