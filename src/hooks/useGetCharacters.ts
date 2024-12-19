import { getCharacters } from "@/services/getCharacters";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetCharacters = () => {
  const MAX_NUM_OF_PAGES = 42;

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
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

export default useGetCharacters;
