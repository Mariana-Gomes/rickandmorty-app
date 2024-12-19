import { useCallback, useState } from "react";

import { loadFavorites, saveFavorites } from "@/storage/favoriteCharacters";
import { useFocusEffect } from "@react-navigation/native";

const useFavoriteCharacters = () => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<number[]>([]);
  const [isLoadingCharacters, setIsLoadingCharacters] = useState(false);

  const getFavoriteCharacters = async () => {
    try {
      setIsLoadingCharacters(true);
      const favorites = await loadFavorites();
      setFavoriteCharacters(favorites);
    } catch (error) {
      console.error("Failed to load data from AsyncStorage:", error);
    } finally {
      setIsLoadingCharacters(false);
    }
  };

  const updateFavoriteCharacters = async (id: number) => {
    try {
      setIsLoadingCharacters(true);
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

      getFavoriteCharacters();
    } catch (error) {
      console.error("Failed to load data from AsyncStorage:", error);
    } finally {
      setIsLoadingCharacters(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getFavoriteCharacters();
    }, [])
  );

  return {
    favoriteCharacters,
    isLoadingCharacters,
    updateFavoriteCharacters,
  };
};

export default useFavoriteCharacters;
