import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "../components/SearchBar";
import "@testing-library/jest-dom/extend-expect";

describe("SearchBar component", () => {
  test("renders search input and button", () => {
    render(<SearchBar functionSearch={() => {}} />);

    const searchInput = screen.getByRole("searchbox");
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByRole("button", { name: /search/i });
    expect(searchButton).toBeInTheDocument();
  });

  test("calls functionSearch on input change", () => {
    const functionSearchMock = jest.fn();
    render(<SearchBar functionSearch={functionSearchMock} />);
    
    const searchInput = screen.getByRole("searchbox");
    fireEvent.change(searchInput, { target: { value: "example" } });
    
    expect(functionSearchMock).toHaveBeenCalledWith("example");
  });
});
