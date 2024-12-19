import { render, fireEvent } from "@testing-library/react-native";
import { CharactersList } from "./";
import { Character } from "@/services/types";
import theme from "@/theme";
import { ThemeProvider } from "styled-components/native";

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: jest.fn().mockReturnValue({
      navigate: jest.fn(),
    }),
  };
});

type CharacterMock = Pick<Character, "id" | "name" | "status" | "image">;

const mockCharacters: CharacterMock[] = [
  { id: 1, name: "Rick Sanchez", status: "Alive", image: "rick_image.png" },
  { id: 2, name: "Morty Smith", status: "Alive", image: "morty_image.png" },
];

describe("CharactersList", () => {
  it("should render empty state when no characters are available", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharactersList
          characters={[]}
          favorites={[]}
          onUpdateFavorites={jest.fn()}
        />
      </ThemeProvider>
    );

    const emptyText = getByTestId("empty-text");
    expect(emptyText).toBeTruthy();
  });

  it("should render the list of characters correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CharactersList
          characters={mockCharacters as Character[]}
          favorites={[]}
          onUpdateFavorites={jest.fn()}
          isLoading={false}
        />
      </ThemeProvider>
    );

    const firstCharacter = getByText("Rick Sanchez");
    const secondCharacter = getByText("Morty Smith");
    expect(firstCharacter).toBeTruthy();
    expect(secondCharacter).toBeTruthy();
  });

  it("should call onUpdateFavorites when a character is marked as favorite", () => {
    const mockUpdateFavorites = jest.fn();

    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharactersList
          characters={mockCharacters as Character[]}
          favorites={[]}
          onUpdateFavorites={mockUpdateFavorites}
          isLoading={false}
        />
      </ThemeProvider>
    );

    const firstCharacterFavoriteButton = getAllByTestId(
      "favorite-character-button"
    );
    fireEvent.press(firstCharacterFavoriteButton[0]);

    expect(mockUpdateFavorites).toHaveBeenCalledWith(mockCharacters[0].id);
  });

  it("should render loading state when characters are being loaded", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharactersList
          characters={[]}
          favorites={[]}
          onUpdateFavorites={jest.fn()}
          isLoading={true}
        />
      </ThemeProvider>
    );

    const loadingComponent = getByTestId("loading-container");
    expect(loadingComponent).toBeTruthy();
  });

  it("should render footer loading when loading next page", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharactersList
          characters={mockCharacters as Character[]}
          favorites={[]}
          onUpdateFavorites={jest.fn()}
          isLoadingNextPage={true}
        />
      </ThemeProvider>
    );

    const footerLoading = getByTestId("footer-loading-container");
    expect(footerLoading).toBeTruthy();
  });
});
