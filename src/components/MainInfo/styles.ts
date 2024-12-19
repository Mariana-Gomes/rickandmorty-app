import styled, { css } from "styled-components/native";

interface ContainerProps {
  hideSeparator: boolean;
}

export const Container = styled.View<ContainerProps>`
  align-items: center;
  flex: 1;
  border-right-width: ${({ hideSeparator }) => (hideSeparator ? 0 : 1)}px;
  border-color: ${({ theme }) => theme.COLORS.DARK};
  margin-top: 20px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.DARK};
  `};
  text-align: center;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.DARK};
  `};

  margin-bottom: 16px;
`;
