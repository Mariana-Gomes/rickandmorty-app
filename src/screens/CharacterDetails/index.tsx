import React, { useEffect } from "react";
import {
  Container,
  ContainerInfo,
  NameCharacter,
  ImageCharacter,
  ContainerMainInfo,
  EpisodesTitle,
  ContainerTitle,
  Title,
  ImageError,
  FavoriteContainer,
  IconWrapper,
} from "./styles";
import Rick from "@/assets/rick.png";
import { MainInfo } from "@/components/MainInfo";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCharacterById } from "@/services/getCharactersById";
import { getEpisodesByUrls } from "@/services/getEpisodesByUrls";

import type { RootStackParamList } from "@/routes/types";
import { Loading } from "@/components/Loading";
import useFavoriteEpisodes from "@/hooks/useFavoriteEpisodes";
import { EpisodeList } from "@/components/EpisodeList";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react-native";
import theme from "@/theme";
import useFavoriteCharacters from "@/hooks/useFavoriteCharacters";

type CharacterDetailsRouteProp = RouteProp<
  RootStackParamList,
  "CharacterDetails"
>;

type CharacterDetails = {
  isFavorite: boolean;
};

export function CharactersDetails({ isFavorite }: CharacterDetails) {
  const route = useRoute<CharacterDetailsRouteProp>();
  const { characterId } = route.params;

  const { favoriteEpisodes, updateFavoriteEpisodes } = useFavoriteEpisodes();

  const { favoriteCharacters, updateFavoriteCharacters } =
    useFavoriteCharacters();

  const isCharacterFavorite = favoriteCharacters.includes(characterId);

  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.invalidateQueries([`character-${characterId}`]);
  }, [characterId, queryClient]);

  const { data, isLoading, error } = useQuery({
    queryKey: [`character-${characterId}`],
    queryFn: () => getCharacterById(characterId),
  });

  const episodeUrls = data?.episode || [];
  const {
    data: episodes,
    isLoading: isLoadingEpisodes,
    error: episodesError,
  } = useQuery({
    queryKey: [`episodes-${characterId}`],
    queryFn: () => getEpisodesByUrls(episodeUrls),
    enabled: !!data,
  });

  if (isLoading || isLoadingEpisodes) {
    return <Loading />;
  }

  if (error || episodesError) {
    return (
      <ContainerTitle>
        <ImageError source={Rick} />
        <Title>
          Morty, isso é um desastre! Não consegui carregar os dados!
        </Title>
      </ContainerTitle>
    );
  }

  const renderListHeader = () => {
    return (
      <>
        <ImageCharacter source={{ uri: data?.image }} />
        <FavoriteContainer>
          <IconWrapper onPress={() => updateFavoriteCharacters(characterId)}>
            {isCharacterFavorite ? (
              <IconHeartFilled size={24} fill={theme.COLORS.DARK} />
            ) : (
              <IconHeart size={24} color={theme.COLORS.DARK} />
            )}
          </IconWrapper>
        </FavoriteContainer>

        <ContainerInfo>
          <NameCharacter>{data?.name}</NameCharacter>
          <ContainerMainInfo>
            <MainInfo description="Status" value={data?.status} />
            <MainInfo description="Gender" value={data?.gender} />
            <MainInfo
              description="Species"
              hideSeparator
              value={data?.species}
            />
          </ContainerMainInfo>
          <EpisodesTitle>Aparições</EpisodesTitle>
        </ContainerInfo>
      </>
    );
  };

  return (
    <Container>
      <EpisodeList
        episodes={episodes}
        favoriteEpisodesList={favoriteEpisodes}
        onUpdateFavoriteEpisodes={updateFavoriteEpisodes}
        isLoading={isLoadingEpisodes}
        headerComponent={renderListHeader}
      />
    </Container>
  );
}
