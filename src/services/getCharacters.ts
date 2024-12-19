import api from "@/services/api";

import type { CharactersResult } from "./types";

export const getCharacters = async ({
  pageParam = 1,
}): Promise<CharactersResult> => {
  try {
    const response = await api.get(`/character/?page=${pageParam}`);

    return {
      data: response.data.results,
      nextPage: pageParam + 1,
    };
  } catch (error) {
    console.error("Error fetching characters: ", error);
    throw error;
  }
};
