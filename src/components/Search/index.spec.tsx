import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Search } from "./index";
import { ThemeProvider } from "styled-components/native";
import theme from "@/theme";

jest.mock("styled-components", () => ({
  ...jest.requireActual("styled-components"),
  useTheme: jest.fn(),
}));

describe("Search Component", () => {
  it("should render input correctly", () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <Search
          placeholder="Buscar personagem ou episódio"
          onSearch={jest.fn()}
          autoCorrect={false}
        />
      </ThemeProvider>
    );

    const input = getByPlaceholderText("Buscar personagem ou episódio");
    expect(input).toBeTruthy();
  });

  it("should call onSearch when typing", () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <Search onSearch={mockOnSearch} placeholder="Search..." />
      </ThemeProvider>
    );

    const input = getByPlaceholderText("Search...");
    fireEvent.changeText(input, "test search");

    expect(mockOnSearch).toHaveBeenCalledWith("test search");
  });
});
