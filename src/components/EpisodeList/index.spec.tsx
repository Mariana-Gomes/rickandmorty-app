import { render, fireEvent } from "@testing-library/react-native";
import { EpisodeList } from "./";
import { Episode } from "@/services/types";
import theme from "@/theme";
import { ThemeProvider } from "styled-components/native";

type EpisodeMock = Pick<Episode, "id" | "name" | "episode">;

const mockEpisodes: EpisodeMock[] = [
  { id: 1, name: "Pilot", episode: "S01E01" },
  { id: 2, name: "Lawn Mower Dog", episode: "S01E02" },
];

describe("EpisodeList", () => {
  it("should render empty state when no episodes are available", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ ...theme }}>
        <EpisodeList
          episodes={[]}
          favoriteEpisodesList={[]}
          onUpdateFavoriteEpisodes={jest.fn()}
        />
      </ThemeProvider>
    );

    const emptyText = getByTestId("empty-text");
    expect(emptyText).toBeTruthy();
  });

  it("should render the list of episodes correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <EpisodeList
          episodes={mockEpisodes as Episode[]}
          favoriteEpisodesList={[]}
          onUpdateFavoriteEpisodes={jest.fn()}
          isLoading={false}
        />
      </ThemeProvider>
    );

    const firstEpisode = getByText("Pilot");
    const secondEpisode = getByText("Lawn Mower Dog");
    expect(firstEpisode).toBeTruthy();
    expect(secondEpisode).toBeTruthy();
  });

  it("should call onUpdateFavoriteEpisodes when an episode is marked as favorite", () => {
    const mockUpdateFavoriteEpisodes = jest.fn();

    const { getAllByTestId } = render(
      <ThemeProvider theme={{ ...theme }}>
        <EpisodeList
          episodes={mockEpisodes as Episode[]}
          favoriteEpisodesList={[]}
          onUpdateFavoriteEpisodes={mockUpdateFavoriteEpisodes}
          isLoading={false}
        />
      </ThemeProvider>
    );

    const firstEpisodeFavoriteButton = getAllByTestId(
      "favorite-episode-button"
    );
    fireEvent.press(firstEpisodeFavoriteButton[0]);

    expect(mockUpdateFavoriteEpisodes).toHaveBeenCalledWith(mockEpisodes[0].id);
  });
});
