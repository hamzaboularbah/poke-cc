import t from "../actionsTypes";

const initialState = {
  pokemons: [],
  next: null,
  previous: null,
  count: 0,
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SAVE_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload.pokemons],
        next: action.payload.next,
        previous: action.payload.previous,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
