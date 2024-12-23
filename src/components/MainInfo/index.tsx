import { Container, TitleContainer, Title, Description } from "./styles";

type MainInfoProps = {
  value: string;
  description: string;
  hideSeparator?: boolean;
};

export function MainInfo({
  value,
  description,
  hideSeparator = false,
}: MainInfoProps) {
  return (
    <Container hideSeparator={hideSeparator} testID="main-info-container">
      <Description>{description}</Description>
      <TitleContainer>
        <Title>{value}</Title>
      </TitleContainer>
    </Container>
  );
}
