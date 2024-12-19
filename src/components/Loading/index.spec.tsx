import React from "react";
import { render } from "@testing-library/react-native";
import { Loading } from "./";
import theme from "@/theme";
import { ThemeProvider } from "styled-components/native";

describe("Loading Component", () => {
  it("should render the container and the load indicator", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ ...theme }}>
        <Loading />
      </ThemeProvider>
    );

    const container = getByTestId("loading-container");
    const loadIndicator = getByTestId("load-indicator");

    expect(container).toBeTruthy();
    expect(loadIndicator).toBeTruthy();
  });
});
