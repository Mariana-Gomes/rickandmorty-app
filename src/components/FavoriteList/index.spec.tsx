import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { FavoriteList } from "./";
import { Character, Episode } from "@/services/types";
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
type EpisodeMock = Pick<Episode, "id" | "name" | "episode">;

describe("FavoriteList Component", () => {
  const mockUpdateFavoriteCharacters = jest.fn();
  const mockUpdateFavoriteEpisodes = jest.fn();

  const favoriteCharactersList: CharacterMock[] = [
    { id: 1, name: "Rick Sanchez", status: "Alive", image: "rick.jpg" },
    { id: 2, name: "Morty Smith", status: "Alive", image: "morty.jpg" },
  ];

  const favoriteEpisodesList: EpisodeMock[] = [
    { id: 1, name: "Pilot", episode: "S01E01" },
    { id: 2, name: "Close Rick-Counters of the Rick Kind", episode: "S01E10" },
  ];

  const favoritedCharacters = [1];
  const favoritedEpisodes = [1];

  it("should render section headers correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <FavoriteList
          favoriteCharactersList={favoriteCharactersList as Character[]}
          favoriteEpisodesList={favoriteEpisodesList as Episode[]}
          favoritedCharacters={favoritedCharacters}
          favoritedEpisodes={favoritedEpisodes}
          onUpdateFavoriteCharacters={mockUpdateFavoriteCharacters}
          onUpdateFavoriteEpisodes={mockUpdateFavoriteEpisodes}
        />
      </ThemeProvider>
    );

    expect(getByText("Personagens Favoritos")).toBeTruthy();
    expect(getByText("Episódios Favoritos")).toBeTruthy();
  });

  it("should render favorite characters and episodes correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <FavoriteList
          favoriteCharactersList={favoriteCharactersList as Character[]}
          favoriteEpisodesList={favoriteEpisodesList as Episode[]}
          favoritedCharacters={favoritedCharacters}
          favoritedEpisodes={favoritedEpisodes}
          onUpdateFavoriteCharacters={mockUpdateFavoriteCharacters}
          onUpdateFavoriteEpisodes={mockUpdateFavoriteEpisodes}
        />
      </ThemeProvider>
    );

    expect(getByText("Rick Sanchez")).toBeTruthy();
    expect(getByText("Morty Smith")).toBeTruthy();
    expect(getByText("Pilot")).toBeTruthy();
    expect(getByText("Close Rick-Counters of the Rick Kind")).toBeTruthy();
  });

  it("should show empty message for empty sections", () => {
    const { getByText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <FavoriteList
          favoriteCharactersList={[]}
          favoriteEpisodesList={[]}
          favoritedCharacters={[]}
          favoritedEpisodes={[]}
          onUpdateFavoriteCharacters={mockUpdateFavoriteCharacters}
          onUpdateFavoriteEpisodes={mockUpdateFavoriteEpisodes}
        />
      </ThemeProvider>
    );

    expect(getByText("Não há personagens favoritados.")).toBeTruthy();
    expect(getByText("Não há episódios favoritados.")).toBeTruthy();
  });

  it("should call onUpdateFavoriteCharacters when character favorite toggle is pressed", () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={{ ...theme }}>
        <FavoriteList
          favoriteCharactersList={favoriteCharactersList as Character[]}
          favoriteEpisodesList={favoriteEpisodesList as Episode[]}
          favoritedCharacters={favoritedCharacters}
          favoritedEpisodes={favoritedEpisodes}
          onUpdateFavoriteCharacters={mockUpdateFavoriteCharacters}
          onUpdateFavoriteEpisodes={mockUpdateFavoriteEpisodes}
        />
      </ThemeProvider>
    );

    const characterButton = getAllByTestId("favorite-character-button");
    fireEvent.press(characterButton[0]);
    expect(mockUpdateFavoriteCharacters).toHaveBeenCalledTimes(1);
  });

  it("should call onUpdateFavoriteEpisodes when episode favorite toggle is pressed", () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={{ ...theme }}>
        <FavoriteList
          favoriteCharactersList={favoriteCharactersList as Character[]}
          favoriteEpisodesList={favoriteEpisodesList as Episode[]}
          favoritedCharacters={favoritedCharacters}
          favoritedEpisodes={favoritedEpisodes}
          onUpdateFavoriteCharacters={mockUpdateFavoriteCharacters}
          onUpdateFavoriteEpisodes={mockUpdateFavoriteEpisodes}
        />
      </ThemeProvider>
    );

    const episodeButton = getAllByTestId("favorite-episode-button");
    fireEvent.press(episodeButton[0]);
    expect(mockUpdateFavoriteEpisodes).toHaveBeenCalledWith(1);
  });
});
