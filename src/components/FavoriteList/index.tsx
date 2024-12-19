import { SectionList } from "react-native";

import { CharacterCard } from "@/components/CharacterCard";
import { EpisodeItem } from "@/components/EpisodeItem";
import { EmptyContainer, EmptyText, Title } from "./styles";

import { Character, Episode } from "@/services/types";

enum Sections {
  CHARACTER = "character",
  EPISODE = "episode",
}

type FavoritesProps = {
  favoriteCharactersList: Character[];
  favoriteEpisodesList: Episode[];
  favoritedCharacters: number[];
  favoritedEpisodes: number[];
  onUpdateFavoriteCharacters: (id: number) => void;
  onUpdateFavoriteEpisodes: (id: number) => void;
};

type SectionType = {
  data: Character[] | Episode[];
  type: Sections;
};

export function FavoriteList({
  favoriteCharactersList,
  favoriteEpisodesList,
  favoritedCharacters,
  favoritedEpisodes,
  onUpdateFavoriteCharacters,
  onUpdateFavoriteEpisodes,
}: FavoritesProps) {
  const data = [
    {
      title: "Personagens Favoritos",
      data: favoriteCharactersList,
      type: Sections.CHARACTER,
    },
    {
      title: "Episódios Favoritos",
      data: favoriteEpisodesList,
      type: Sections.EPISODE,
    },
  ];

  const renderEmptySectionFooter = (section: SectionType) => {
    if (section.data.length > 0) return null;

    const emptyMessage =
      section.type === Sections.CHARACTER
        ? "Não há personagens favoritados."
        : "Não há episódios favoritados.";

    return (
      <EmptyContainer>
        <EmptyText>{emptyMessage}</EmptyText>
      </EmptyContainer>
    );
  };

  return (
    <SectionList
      sections={data}
      keyExtractor={(item) => item.name}
      renderItem={({ item, section }) => {
        if (section.type === Sections.CHARACTER) {
          const character = item as Character;

          return (
            <CharacterCard
              id={character.id}
              name={character.name}
              isAlive={character.status === "Alive"}
              avatarUrl={character.image}
              isFavorite={favoritedCharacters.includes(character.id)}
              onFavoriteToggle={() => onUpdateFavoriteCharacters(character.id)}
            />
          );
        }

        if (section.type === Sections.EPISODE) {
          const episode = item as unknown as Episode;

          return (
            <EpisodeItem
              name={episode.name}
              episodeNumber={episode.episode}
              onFavorite={() => onUpdateFavoriteEpisodes(episode.id)}
              isFavorite={favoritedEpisodes.includes(episode.id)}
            />
          );
        }

        return null;
      }}
      renderSectionHeader={({ section: { title } }) => <Title>{title}</Title>}
      renderSectionFooter={({ section }) => renderEmptySectionFooter(section)}
    />
  );
}
