import styled, { css } from "styled-components/native";

export const EmptyContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
`;

export const EmptyText = styled.Text`
  text-align: center;
  margin-top: 20px;
  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.DARK};
    `};
`;

export const Title = styled.Text`
  margin: 10px 0px;

  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.LG}px;
      color: ${theme.COLORS.DARK};
    `};
`;
