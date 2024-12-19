import React from "react";
import { render } from "@testing-library/react-native";
import { MainInfo } from "./";
import theme from "@/theme";
import { ThemeProvider } from "styled-components/native";

describe("MainInfo Component", () => {
  it("should render the value and description correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <MainInfo value="Test Value" description="Test Description" />
      </ThemeProvider>
    );

    expect(getByText("Test Value")).toBeTruthy();
    expect(getByText("Test Description")).toBeTruthy();
  });

  it("should hide the separator when hideSeparator is true", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ ...theme }}>
        <MainInfo
          value="Test Value"
          description="Test Description"
          hideSeparator={true}
        />
      </ThemeProvider>
    );

    const container = getByTestId("main-info-container");
    expect(container.props.style).not.toContainEqual(
      expect.objectContaining({ borderBottomWidth: expect.any(Number) })
    );
  });
});
