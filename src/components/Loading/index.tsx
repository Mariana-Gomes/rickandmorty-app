import React from "react";
import { Container, LoadIndicator } from "./styles";

export function Loading() {
  return (
    <Container testID="loading-container">
      <LoadIndicator testID="load-indicator" />
    </Container>
  );
}
