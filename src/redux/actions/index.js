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
