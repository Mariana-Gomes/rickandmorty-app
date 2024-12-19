import api from "@/services/api";

import type { EpisodesResult } from "./types";

export const getEpisodes = async ({
  pageParam = 1,
}): Promise<EpisodesResult> => {
  try {
    const response = await api.get(`/episode/?page=${pageParam}`);

    return {
      data: response.data.results,
      nextPage: pageParam + 1,
    };
  } catch (error) {
    console.error("Error fetching episodes: ", error);
    throw error;
  }
};
