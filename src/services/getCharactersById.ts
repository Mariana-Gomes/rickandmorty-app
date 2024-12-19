import api from "@/services/api";

import type { Character } from "./types";

export const getCharacterById = async (id: number): Promise<Character> => {
  try {
    const response = await api.get(`/character/${id}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching character by id: ", error);
    throw error;
  }
};
