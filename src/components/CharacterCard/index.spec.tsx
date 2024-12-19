import { render, fireEvent } from "@testing-library/react-native";
import { CharacterCard } from ".";
import theme from "@/theme";
import { ThemeProvider } from "styled-components/native";

const mockedNavigation = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigation,
    }),
  };
});

describe("CharacterCard", () => {
  const mockCharacter = {
    id: 1,
    name: "Rick Sanchez",
    isAlive: true,
    avatarUrl: "rick_image.png",
    isFavorite: false,
    onFavoriteToggle: jest.fn(),
  };

  it("should render character details correctly", () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharacterCard
          id={mockCharacter.id}
          name={mockCharacter.name}
          isAlive={mockCharacter.isAlive}
          avatarUrl={mockCharacter.avatarUrl}
          isFavorite={mockCharacter.isFavorite}
          onFavoriteToggle={mockCharacter.onFavoriteToggle}
        />
      </ThemeProvider>
    );

    const characterName = getByText("Rick Sanchez");
    const characterStatus = getByText("Vivo");
    expect(characterName).toBeTruthy();
    expect(characterStatus).toBeTruthy();
    expect(getByTestId("favorite-character-button")).toBeTruthy();
  });

  it("should call onFavoriteToggle when favorite button is pressed", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharacterCard
          id={mockCharacter.id}
          name={mockCharacter.name}
          isAlive={mockCharacter.isAlive}
          avatarUrl={mockCharacter.avatarUrl}
          isFavorite={mockCharacter.isFavorite}
          onFavoriteToggle={mockCharacter.onFavoriteToggle}
        />
      </ThemeProvider>
    );

    const favoriteButton = getByTestId("favorite-character-button");
    fireEvent.press(favoriteButton);

    expect(mockCharacter.onFavoriteToggle).toHaveBeenCalled();
  });

  it("should navigate to character details when card is pressed", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharacterCard
          id={mockCharacter.id}
          name={mockCharacter.name}
          isAlive={mockCharacter.isAlive}
          avatarUrl={mockCharacter.avatarUrl}
          isFavorite={mockCharacter.isFavorite}
          onFavoriteToggle={mockCharacter.onFavoriteToggle}
        />
      </ThemeProvider>
    );

    const characterCard = getByTestId("character-card");
    fireEvent.press(characterCard);

    expect(mockedNavigation).toHaveBeenCalledWith("CharacterDetails", {
      characterId: mockCharacter.id,
    });
  });
});
