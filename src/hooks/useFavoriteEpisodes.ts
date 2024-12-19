import { useCallback, useState } from "react";
import { loadFavorites, saveFavorites } from "@/storage/favoriteEpisodes";
import { useFocusEffect } from "@react-navigation/native";

const useFavoriteEpisodes = () => {
  const [favoriteEpisodes, setFavoriteEpisodes] = useState<number[]>([]);
  const [isLoadingEpisodes, setIsLoadingEpisodes] = useState(false);

  const getFavoriteEpisodes = async () => {
    try {
      setIsLoadingEpisodes(true);
      const favorites = await loadFavorites();
      setFavoriteEpisodes(favorites);
    } catch (error) {
      console.error("Failed to load data from AsyncStorage:", error);
    } finally {
      setIsLoadingEpisodes(false);
    }
  };

  const updateFavoriteEpisodes = async (id: number) => {
    try {
      setIsLoadingEpisodes(true);
      const storedFavorites = await loadFavorites();

      let updatedFavorites;
      if (storedFavorites.includes(id)) {
        updatedFavorites = storedFavorites.filter(
          (favoriteId) => favoriteId !== id
        );
      } else {
        updatedFavorites = [...storedFavorites, id];
      }

      await saveFavorites(updatedFavorites);

      getFavoriteEpisodes();
    } catch (error) {
      console.error("Failed to load data from AsyncStorage:", error);
    } finally {
      setIsLoadingEpisodes(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getFavoriteEpisodes();
    }, [])
  );

  return {
    favoriteEpisodes,
    isLoadingEpisodes,
    updateFavoriteEpisodes,
  };
};

export default useFavoriteEpisodes;
