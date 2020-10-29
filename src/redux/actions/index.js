import t from "../actionsTypes";

export const loadPokemons = (loadMoreURL) => {
  return {
    type: t.LOAD_POKEMONS,
    payload: {
      loadMoreURL: loadMoreURL ? loadMoreURL : null,
    },
  };
};

export const loadPokemonTypes = () => {
  return {
    type: t.LOAD_POKEMON_TYPES,
  };
};
export const fetchPokemonDetails = (pokemonId) => {
  return {
    type: t.FETCH_POKEMON_DETAILS,
    payload: pokemonId,
  };
};
