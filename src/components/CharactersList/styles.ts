import styled, { css } from "styled-components/native";

export const List = styled.FlatList`
  padding-bottom: 20px;
  flex: 1;
`;

export const EmptyContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`;

export const EmptyImage = styled.Image`
  width: 50px;
  height: 60px;
`;

export const EmptyText = styled.Text`
  text-align: center;
  margin-top: 20px;
  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.SEMIBOLD};
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.DARK};
    `};
`;
