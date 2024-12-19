import React from "react";
import { FlatList } from "react-native";
import { CharacterCard } from "../CharacterCard";
import { EmptyContainer, EmptyImage, EmptyText } from "./styles";
import Rick from "@/assets/rick.png";
import { FooterLoading } from "../FooterLoading";
import { Loading } from "../Loading";
import { Character } from "@/services/types";

interface CharactersListProps {
  characters: Character[];
  favorites: number[];
  onUpdateFavorites: (updatedFavorites: number) => void;
  isLoading?: boolean;
  isLoadingNextPage?: boolean;
  onLoadNextPage?: () => void;
}

export function CharactersList({
  characters,
  onLoadNextPage,
  favorites,
  isLoading = false,
  isLoadingNextPage = false,
  onUpdateFavorites,
}: CharactersListProps) {
  const renderEmpty = () => {
    if (isLoading) return <Loading />;

    return (
      <EmptyContainer>
        <EmptyImage source={Rick} />
        <EmptyText testID="empty-text">
          Morty, ninguém aqui! Onde estão eles?
        </EmptyText>
      </EmptyContainer>
    );
  };

  const renderListFooter = () => {
    if (!isLoadingNextPage || !characters?.length) return null;

    return <FooterLoading />;
  };

  const renderItem = ({ item }: { item: Character }) => (
    <CharacterCard
      id={item.id}
      name={item.name}
      isAlive={item.status === "Alive"}
      avatarUrl={item.image}
      isFavorite={favorites.includes(item.id)}
      onFavoriteToggle={() => onUpdateFavorites(item.id)}
    />
  );

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={renderEmpty}
      onEndReached={onLoadNextPage}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderListFooter}
    />
  );
}
