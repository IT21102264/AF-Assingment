import { render, screen } from "@testing-library/react";
import Features from "../components/Features";

describe("Features component", () => {
  beforeEach(() => {
    render(<Features />);
  });

  test("renders feature items", () => {
    const featureItems = screen.getAllByRole("img");
    expect(featureItems).toHaveLength(5);
  });

  test("renders feature item with correct label", () => {
    const featureItems = screen.getAllByRole("img");

    const labels = ["Masks", "Batik", "Brass & copper work", "Pottery", "Lacquer work"];

    featureItems.forEach((item, index) => {
      expect(item.getAttribute("src")).toBeTruthy();

      const label = labels[index];

      const siblingElement = item.nextElementSibling;
      expect(siblingElement.textContent).toBe(label);
    });
  });
});
