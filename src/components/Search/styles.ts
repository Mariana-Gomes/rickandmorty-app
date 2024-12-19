import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
  `};
  flex-direction: row;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 8px;
  padding: 10px;
`;

export const SearchInput = styled.TextInput`
  ${({ theme }) => css`
    color: ${theme.COLORS.DARK};
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
  flex: 1;
`;
