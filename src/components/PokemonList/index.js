import PokemonCard from "components/PokemonCard";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 40px;
`;
const PokemonList = () => {
  return (
    <Container>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </Container>
  );
};

export default PokemonList;
