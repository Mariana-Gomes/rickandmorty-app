import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
  flex: 1;
  padding: 0px 20px;
`;

export const ContainerInfo = styled.View`
  padding: 20px;
`;

export const ContainerMainInfo = styled.View`
  flex-direction: row;
  margin: 16px 0px;
`;

export const NameCharacter = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.DARK};
  `};
  margin-top: 16px;
`;

export const ImageCharacter = styled.Image`
  width: 100%;
  height: 300px;
`;

export const EpisodesTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.DARK};
  `};
  margin-top: 20px;
`;

export const ContainerTitle = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageError = styled.Image`
  width: 60px;
  height: 60px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.DARK};
  `};
`;

export const FavoriteContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const IconWrapper = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 20,
    right: 20,
    left: 20,
    bottom: 20,
  },
})``;
