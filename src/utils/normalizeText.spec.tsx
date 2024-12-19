import { normalizeText } from "./normalizeText";

describe("normalizeText", () => {
  it("should remove accents and convert to lowercase", () => {
    const input = "Olá, Mundo!";
    const expectedOutput = "ola, mundo!";

    expect(normalizeText(input)).toBe(expectedOutput);
  });

  it("should handle empty strings", () => {
    const input = "";
    const expectedOutput = "";

    expect(normalizeText(input)).toBe(expectedOutput);
  });

  it("should handle strings without accents", () => {
    const input = "Hello World";
    const expectedOutput = "hello world";

    expect(normalizeText(input)).toBe(expectedOutput);
  });

  it("should handle strings with multiple accents", () => {
    const input = "Árvore";
    const expectedOutput = "arvore";

    expect(normalizeText(input)).toBe(expectedOutput);
  });

  it("should handle strings with special characters", () => {
    const input = "Café com açucar!";
    const expectedOutput = "cafe com acucar!";

    expect(normalizeText(input)).toBe(expectedOutput);
  });
});
