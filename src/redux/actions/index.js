import t from "../actionsTypes";

export const loadPokemons = () => {
  return {
    type: t.LOAD_POKEMONS,
  };
};

export const savePokemons = (pokemons) => {
  return {
    type: t.SAVEPOKEMONS,
    payload: pokemons,
  };
};
