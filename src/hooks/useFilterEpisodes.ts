import { useMemo } from "react";
import { normalizeText } from "@/utils/normalizeText";

interface Episode {
  id: number;
  name: string;
}

export const useFilterEpisodes = (
  episodes: Episode[] | undefined,
  searchText: string
): Episode[] => {
  const normalizedSearch = normalizeText(searchText || "").trim();

  return useMemo(() => {
    if (!episodes) return [];

    return episodes.filter((episode) =>
      normalizeText(episode.name).includes(normalizedSearch)
    );
  }, [episodes, searchText]);
};
