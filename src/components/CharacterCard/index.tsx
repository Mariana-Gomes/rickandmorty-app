import React from "react";
import {
  Container,
  Character,
  Avatar,
  Name,
  ContainerStatus,
  Status,
  Alive,
  InfoCharacter,
  IconWrapper,
} from "./styles";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react-native";

import { useNavigation, NavigationProp } from "@react-navigation/native";
import type { RootStackParamList } from "@/routes/types";
import { useTheme } from "styled-components/native";

interface CharacterCardProps {
  id: number;
  name: string;
  isAlive: boolean;
  avatarUrl: string;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
}

export function CharacterCard({
  id,
  name,
  isAlive,
  avatarUrl,
  isFavorite,
  onFavoriteToggle,
}: CharacterCardProps) {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateToDetails = (id: number) => {
    // return (event: React.SyntheticEvent) => {
    // event.persist();
    navigation.navigate("CharacterDetails", { characterId: id });
    // };
  };

  return (
    <Container onPress={() => navigateToDetails(id)}>
      <Character>
        <Avatar isAlive={isAlive} source={{ uri: avatarUrl }} />
        <InfoCharacter>
          <Name numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Name>
          <ContainerStatus>
            <Status>Status:</Status>
            <Alive>{isAlive ? "Vivo" : "Morto"}</Alive>
          </ContainerStatus>
        </InfoCharacter>
      </Character>

      <IconWrapper onPress={onFavoriteToggle}>
        {isFavorite ? (
          <IconHeartFilled size={24} fill={theme.COLORS.DARK} />
        ) : (
          <IconHeart size={24} color={theme.COLORS.DARK} />
        )}
      </IconWrapper>
    </Container>
  );
}
