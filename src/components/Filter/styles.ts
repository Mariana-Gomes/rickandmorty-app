import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) => css`
    background-color: ${isActive ? theme.COLORS.DARK : "transparent"};
    border: 1px solid ${isActive ? "transparent" : theme.COLORS.DARK};
  `};

  border-radius: 4px;
  margin-right: 12px;
  height: 38px;
  width: 105px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<FilterStyleProps>`
  text-transform: uppercase;
  ${({ theme, isActive }) =>
    css`
      font-family: ${theme.FONT_FAMILY.SEMIBOLD};
      font-size: 12px;
      color: ${isActive ? theme.COLORS.WHITE : theme.COLORS.DARK};
    `};
`;
