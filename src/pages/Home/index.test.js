import Home from "pages/Home";
import { render, screen, waitFor } from "testUtils";

describe("Home Page", () => {
  it("sould show 20 pokemon cards", async () => {
    render(<Home />);
    const loader = screen.getByTestId("loading-spinner");
    expect(loader).toBeInTheDocument();
    await waitFor(() => {
      screen.getByTestId("pokemon-list");
    });

    const pokemonCards = screen.queryAllByLabelText("pokemon-card");
    expect(pokemonCards).toHaveLength(20);
  });
});
