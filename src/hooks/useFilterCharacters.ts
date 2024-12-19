import { useMemo } from "react";
import { normalizeText } from "@/utils/normalizeText";

interface Character {
  id: number;
  name: string;
}

export const useFilterCharacters = (
  characters: Character[] | undefined,
  searchText: string
): Character[] => {
  const normalizedSearch = normalizeText(searchText || "").trim();

  return useMemo(() => {
    if (!characters) return [];

    return characters.filter((char) =>
      normalizeText(char.name).includes(normalizedSearch)
    );
  }, [characters, searchText]);
};
