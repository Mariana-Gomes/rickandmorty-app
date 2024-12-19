import {
  Container,
  Title,
  EpisodeNumber,
  IconWrapper,
  ContainerInfo,
} from "./styles";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react-native";
import { useTheme } from "styled-components/native";

type EpisodeItemProps = {
  name: string;
  episodeNumber: string;
  onFavorite: () => void;
  isFavorite: boolean;
};

export function EpisodeItem({
  name,
  episodeNumber,
  onFavorite,
  isFavorite,
}: EpisodeItemProps) {
  const theme = useTheme();
  return (
    <Container>
      <ContainerInfo>
        <EpisodeNumber>{episodeNumber}</EpisodeNumber>
        <Title numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Title>
      </ContainerInfo>
      <IconWrapper onPress={onFavorite} testID="favorite-episode-button">
        {isFavorite ? (
          <IconHeartFilled size={24} fill={theme.COLORS.DARK} />
        ) : (
          <IconHeart size={24} color={theme.COLORS.DARK} />
        )}
      </IconWrapper>
    </Container>
  );
}
