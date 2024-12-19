import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isAlive?: boolean;
};

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
  `};
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Character = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image<FilterStyleProps>`
  ${({ theme, isAlive }) => css`
    border: 1px solid ${isAlive ? theme.COLORS.GREEN_DARK : theme.COLORS.RED};
  `};
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

export const InfoCharacter = styled.View`
  margin-left: 10px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
  `};
  max-width: 220px;
`;

export const ContainerStatus = styled.View`
  flex-direction: row;
`;

export const Status = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
  `};
  margin-right: 5px;
`;

export const Alive = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const IconWrapper = styled.TouchableOpacity``;
