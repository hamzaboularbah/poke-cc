import PokemonCard from "components/PokemonCard";
import { Container } from "./style";
const PokemonList = ({ pokemons }) => {
  return (
    <Container>
      {pokemons.length > 0 &&
        pokemons.map((pokemon, i) => <PokemonCard key={i} pokemon={pokemon} />)}
    </Container>
  );
};

export default PokemonList;
