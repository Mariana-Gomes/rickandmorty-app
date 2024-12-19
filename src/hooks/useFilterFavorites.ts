import { useMemo } from "react";
import { normalizeText } from "@/utils/normalizeText";

interface Character {
  id: number;
  name: string;
}

interface Episode {
  id: number;
  name: string;
}

export const useFilterFavorites = (
  characters: Character[] | undefined,
  episodes: Episode[] | undefined,
  searchText: string
): { characters: Character[]; episodes: Episode[] } => {
  const normalizedSearch = normalizeText(searchText || "").trim();

  return useMemo(() => {
    const filteredCharacters =
      characters?.filter((character) =>
        normalizeText(character.name).includes(normalizedSearch)
      ) || [];

    const filteredEpisodes =
      episodes?.filter((episode) =>
        normalizeText(episode.name).includes(normalizedSearch)
      ) || [];

    return {
      characters: filteredCharacters,
      episodes: filteredEpisodes,
    };
  }, [characters, episodes, searchText]);
};
