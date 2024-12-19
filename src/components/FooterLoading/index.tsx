import { Container, LoadIndicator } from "./styles";

export function FooterLoading() {
  return (
    <Container testID="footer-loading-container">
      <LoadIndicator testID="footer-load-indicator" />
    </Container>
  );
}
