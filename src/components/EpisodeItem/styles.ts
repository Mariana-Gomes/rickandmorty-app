import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
  `};
  flex: 1;
  height: 56px;
  border-radius: 10px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.DARK};
  `};
  max-width: 220px;
  margin-left: 10px;
`;

export const EpisodeNumber = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    color: ${theme.COLORS.DARK};
  `};
`;

export const IconWrapper = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 20,
    right: 20,
    left: 20,
    bottom: 20,
  },
})`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
