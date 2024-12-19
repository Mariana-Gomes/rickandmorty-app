import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  gap: 20px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
  flex: 1;
`;

export const ContainerFilters = styled.View`
  flex-direction: row;
`;
