import styled from "styled-components";
import PokemonList from "components/PokemonList";
import { useEffect } from "react";
import { loadPokemons } from "redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div``;

const Home = () => {
  const { pokemons } = useSelector(({ pokemons }) => pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPokemons());
  }, [dispatch]);
  return (
    <Container>
      <PokemonList pokemons={pokemons} />
    </Container>
  );
};

export default Home;
