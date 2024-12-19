import axios from "axios";

import type { Episode } from "./types";

export const getEpisodesByUrls = async (
  episodeUrls: string[]
): Promise<Episode[]> => {
  try {
    const episodeRequests = episodeUrls.map((url) => axios.get(url));

    const episodeResponses = await Promise.all(episodeRequests);

    return episodeResponses.map((response) => response.data);
  } catch (error) {
    console.error("Error fetching episodes by url: ", error);
    throw error;
  }
};
