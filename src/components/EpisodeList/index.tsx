import { EpisodeItem } from "@/components/EpisodeItem";
import { FooterLoading } from "@/components/FooterLoading";
import { FlatList } from "react-native";
import { EmptyContainer, EmptyImage, EmptyText } from "./styles";
import Rick from "@/assets/rick.png";
import { Loading } from "@/components/Loading";
import { Episode } from "@/services/types";

type EpisodesProps = {
  episodes: Episode[];
  favoriteEpisodesList: number[];
  onUpdateFavoriteEpisodes: (id: number) => void;
  fetchNextEpisodePage?: () => void;
  isLoading?: boolean;
  headerComponent?: () => React.JSX.Element;
};

export function EpisodeList({
  episodes,
  favoriteEpisodesList,
  onUpdateFavoriteEpisodes,
  fetchNextEpisodePage,
  isLoading = false,
  headerComponent,
}: EpisodesProps) {
  const renderListFooter = () => {
    if (!isLoading || !episodes?.length) return null;

    return <FooterLoading />;
  };

  const renderEmpty = () => {
    if (isLoading) return <Loading />;
    return (
      <EmptyContainer>
        <EmptyImage source={Rick} />
        <EmptyText>Morty, cadê os episódios? Isso não está certo!</EmptyText>
      </EmptyContainer>
    );
  };

  return (
    <FlatList
      data={episodes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <EpisodeItem
          name={item.name}
          episodeNumber={item.episode}
          onFavorite={() => onUpdateFavoriteEpisodes(item.id)}
          isFavorite={favoriteEpisodesList.includes(item.id)}
        />
      )}
      onEndReached={fetchNextEpisodePage}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderListFooter}
      ListEmptyComponent={renderEmpty}
      ListHeaderComponent={headerComponent}
      showsVerticalScrollIndicator={false}
    />
  );
}
