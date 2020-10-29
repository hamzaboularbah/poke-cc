import PokemonCard from "components/PokemonCard";
import { Container } from "./style";

const PokemonList = ({ pokemons, filterCriteria }) => {
  return (
    <Container data-testid="pokemon-list">
      {pokemons.length === 0 && filterCriteria.length > 0 ? (
        <p>
          Sorry, no pokemon with the selected type(s) are available in this view{" "}
          <br />
          please remove filters and load more pokemons...
        </p>
      ) : (
        pokemons.map((pokemon, i) => <PokemonCard key={i} pokemon={pokemon} />)
      )}
    </Container>
  );
};

export default PokemonList;
