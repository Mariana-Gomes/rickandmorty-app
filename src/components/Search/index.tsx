import React from "react";
import { TextInputProps } from "react-native";
import { Container, SearchInput } from "./styles";
import { IconSearch } from "@tabler/icons-react-native";
import { useTheme } from "styled-components/native";

type SearchProps = TextInputProps & {
  onSearch: (text: string) => void;
};

export function Search({ onSearch, ...rest }: SearchProps) {
  const theme = useTheme();
  return (
    <Container>
      <IconSearch size={24} color={theme.COLORS.GRAY_700} />
      <SearchInput {...rest} onChangeText={onSearch} autoFocus={true} />
    </Container>
  );
}
