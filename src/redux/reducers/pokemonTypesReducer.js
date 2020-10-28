import t from "../actionsTypes";

const initialState = {
  pokemonTypes: [],
  pokemonTypesLoading: false,
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SAVE_POKEMON_TYPES:
      return {
        ...state,
        pokemonTypes: [...state.pokemonTypes, ...action.payload],
      };
    case t.POKEMON_TYPES_LOADING:
      return {
        ...state,
        pokemonTypesLoading: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
