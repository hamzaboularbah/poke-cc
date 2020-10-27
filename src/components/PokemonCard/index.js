import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  height: 300px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  position: relative;
`;

const CardContent = styled.div`
  width: 100%;
`;

const CardFooter = styled.div`
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  padding: 10px 0px;
  width: 100%;
  bottom: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  color: black;
  &:hover {
    color: white;
    background-color: #008ffb;
  }
`;
const PokemonArwork = styled.div`
  background-color: #fbfbfb;
  width: 100%;
  text-align: center;
  img {
    max-width: 80%;
  }
`;
const PokemonCard = () => {
  return (
    <Container>
      <CardContent>
        <PokemonArwork>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
            alt=""
          />
        </PokemonArwork>
      </CardContent>
      <CardFooter>More</CardFooter>
    </Container>
  );
};

export default PokemonCard;
