import { render, fireEvent } from "@testing-library/react-native";
import { EpisodeItem } from "./";
import { ThemeProvider } from "styled-components/native";
import theme from "@/theme";

describe("EpisodeItem", () => {
  it("should render episode information correctly", () => {
    const mockEpisode = {
      name: "Pilot",
      episodeNumber: "S01E01",
      isFavorite: false,
      onFavorite: jest.fn(),
    };

    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <EpisodeItem {...mockEpisode} />
      </ThemeProvider>
    );

    const episodeTitle = getByText("Pilot");
    const episodeNumber = getByText("S01E01");
    const favoriteButton = getByTestId("favorite-episode-button");

    expect(episodeTitle).toBeTruthy();
    expect(episodeNumber).toBeTruthy();
    expect(favoriteButton).toBeTruthy();
  });

  it("should toggle favorite status when the favorite button is pressed", () => {
    const mockOnFavorite = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <EpisodeItem
          name="Pilot"
          episodeNumber="S01E01"
          onFavorite={mockOnFavorite}
          isFavorite={false}
        />
      </ThemeProvider>
    );

    const favoriteButton = getByTestId("favorite-episode-button");
    fireEvent.press(favoriteButton);

    expect(mockOnFavorite).toHaveBeenCalledTimes(1);
  });
});
