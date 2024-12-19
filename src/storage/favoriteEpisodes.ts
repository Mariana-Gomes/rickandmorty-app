import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "@favorite_episodes";

export const saveFavorites = async (favorites: number[]) => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (e) {
    console.error("Erro ao salvar favoritos", e);
  }
};

export const loadFavorites = async (): Promise<number[]> => {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (e) {
    console.error("Erro ao carregar favoritos", e);
    return [];
  }
};
