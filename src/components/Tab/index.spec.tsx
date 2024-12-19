import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { Tab, Tabs } from "./";
import theme from "@/theme";

// Mock do useTheme
jest.mock("styled-components", () => ({
  ...jest.requireActual("styled-components"),
  useTheme: jest.fn(),
}));

describe("Tab Component", () => {
  it("It should render all tabs correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <Tab activeTab={Tabs.CHARACTERS} setActiveTab={jest.fn()} />
      </ThemeProvider>
    );

    expect(getByText(Tabs.CHARACTERS)).toBeTruthy();
    expect(getByText(Tabs.EPISODES)).toBeTruthy();
    expect(getByText(Tabs.FAVORITES)).toBeTruthy();
  });

  it("It should highlight the active tab", () => {
    const { getByText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <Tab activeTab={Tabs.EPISODES} setActiveTab={jest.fn()} />
      </ThemeProvider>
    );

    const inactiveTab = getByText(Tabs.CHARACTERS);
    expect(inactiveTab.props.style).not.toMatchObject({ fontWeight: "bold" });
  });

  it("It should call the setActiveTab function when a tab is clicked", () => {
    const mockSetActiveTab = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <Tab activeTab={Tabs.CHARACTERS} setActiveTab={mockSetActiveTab} />
      </ThemeProvider>
    );

    const episodesTab = getByText(Tabs.EPISODES);
    fireEvent.press(episodesTab);

    expect(mockSetActiveTab).toHaveBeenCalledWith(Tabs.EPISODES);
  });
});
