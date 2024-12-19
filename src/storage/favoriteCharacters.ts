import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "@favorite_characters";

export const saveFavorites = async (favorites: number[]) => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Erro ao salvar favoritos:", error);
  }
};

export const loadFavorites = async (): Promise<number[]> => {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error("Erro ao carregar favoritos:", error);
    return [];
  }
};

export const isFavorite = (id: string, favorites: string[]): boolean => {
  return favorites.includes(id);
};
