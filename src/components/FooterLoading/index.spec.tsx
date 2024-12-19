import React from "react";
import { render } from "@testing-library/react-native";
import { FooterLoading } from "./";
import theme from "@/theme";
import { ThemeProvider } from "styled-components/native";

describe("FooterLoading Component", () => {
  it("should render the container and the load indicator", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ ...theme }}>
        <FooterLoading />
      </ThemeProvider>
    );

    const container = getByTestId("footer-loading-container");
    const loadIndicator = getByTestId("footer-load-indicator");

    expect(container).toBeTruthy();
    expect(loadIndicator).toBeTruthy();
  });
});
