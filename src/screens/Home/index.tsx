import React, { useState } from "react";
import { Container, ContainerFilters } from "./styles";

import { Header } from "@/components/Header";
import { Search } from "@/components/Search";
import { Tab, Tabs } from "@/components/Tab";
import { CharactersList } from "@/components/CharactersList";
import { FavoriteList } from "@/components/FavoriteList";
import { EpisodeList } from "@/components/EpisodeList";

import useGetCharacters from "@/hooks/useGetCharacters";
import useGetEpisodes from "@/hooks/useGetEpisodes";
import useFavoriteCharacters from "@/hooks/useFavoriteCharacters";
import useFavoriteEpisodes from "@/hooks/useFavoriteEpisodes";

import { useFilterCharacters } from "@/hooks/useFilterCharacters";
import { useFilterEpisodes } from "@/hooks/useFilterEpisodes";
import { useFilterFavorites } from "@/hooks/useFilterFavorites";

export function Home() {
  const [searchText, setSearchText] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("Personagens");

  const {
    data: characters,
    isFetching: isLoadingCharacters,
    fetchNextPage: fetchNextCharacterPage,
    isFetchingNextPage: isLoadingNextPageCharacters,
  } = useGetCharacters();
  const {
    data: episodes,
    fetchNextPage: fetchNextEpisodePage,
    isFetchingNextPage: isLoadingNextPageEpisodes,
  } = useGetEpisodes();

  const { favoriteCharacters, updateFavoriteCharacters } =
    useFavoriteCharacters();
  const { favoriteEpisodes, updateFavoriteEpisodes } = useFavoriteEpisodes();

  const flattenCharacters = characters?.pages.flatMap((page) => page.data);
  const flattenEpisodes = episodes?.pages.flatMap((page) => page.data);

  const favoriteCharactersToList = flattenCharacters?.filter((char) =>
    favoriteCharacters.includes(char.id)
  );
  const favoriteEpisodesToList = flattenEpisodes?.filter((char) =>
    favoriteEpisodes.includes(char.id)
  );

  const filteredCharacters = useFilterCharacters(flattenCharacters, searchText);
  const filteredEpisodes = useFilterEpisodes(flattenEpisodes, searchText);

  const {
    characters: filteredFavoriteCharacters,
    episodes: filteredFavoriteEpisodes,
  } = useFilterFavorites(
    favoriteCharactersToList,
    favoriteEpisodesToList,
    searchText
  );

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case Tabs.CHARACTERS:
        return (
          <CharactersList
            characters={filteredCharacters}
            onLoadNextPage={fetchNextCharacterPage}
            favorites={favoriteCharacters}
            onUpdateFavorites={updateFavoriteCharacters}
            isLoading={isLoadingCharacters}
            isLoadingNextPage={isLoadingNextPageCharacters}
          />
        );
      case Tabs.EPISODES:
        return (
          <EpisodeList
            episodes={filteredEpisodes}
            favoriteEpisodesList={favoriteEpisodes}
            onUpdateFavoriteEpisodes={updateFavoriteEpisodes}
            fetchNextEpisodePage={fetchNextEpisodePage}
            isLoading={isLoadingNextPageEpisodes}
          />
        );
      case Tabs.FAVORITES:
        return (
          <FavoriteList
            favoriteCharactersList={filteredFavoriteCharacters ?? []}
            favoriteEpisodesList={filteredFavoriteEpisodes ?? []}
            favoritedCharacters={favoriteCharacters}
            favoritedEpisodes={favoriteEpisodes}
            onUpdateFavoriteCharacters={updateFavoriteCharacters}
            onUpdateFavoriteEpisodes={updateFavoriteEpisodes}
          />
        );
    }
  };

  return (
    <Container>
      <Header />
      <Search
        placeholder="Buscar personagem ou episódio"
        onSearch={handleSearch}
        autoCorrect={false}
      />

      <ContainerFilters>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      </ContainerFilters>

      {renderComponent()}
    </Container>
  );
}
