import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Filter } from "./";
import theme from "@/theme";
import { ThemeProvider } from "styled-components/native";

describe("Filter Component", () => {
  it("should render the title correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <Filter title="Test Filter" isActive={false} onPress={jest.fn()} />
      </ThemeProvider>
    );

    const title = getByText("Test Filter");
    expect(title).toBeTruthy();
  });

  it("should apply the inactive style when isActive is false", () => {
    const { getByText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <Filter title="Test Filter" isActive={false} onPress={jest.fn()} />
      </ThemeProvider>
    );

    const title = getByText("Test Filter");
    expect(title.props.style).not.toContainEqual(
      expect.objectContaining({ fontWeight: "bold" })
    );
  });

  it("should call onPress when clicked", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <Filter title="Test Filter" isActive={false} onPress={mockOnPress} />
      </ThemeProvider>
    );

    const title = getByText("Test Filter");
    fireEvent.press(title);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
