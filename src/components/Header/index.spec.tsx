import React from "react";
import { render } from "@testing-library/react-native";
import { Header } from "./";
import { ThemeProvider } from "styled-components/native";
import theme from "@/theme";

describe("Header Component", () => {
  it("should render the title correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={{ ...theme }}>
        <Header />
      </ThemeProvider>
    );

    const title = getByText("Rick and Morty");
    expect(title).toBeTruthy();
  });
});
