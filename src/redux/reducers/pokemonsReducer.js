import t from "../actionsTypes";

const initialState = {
  pokemons: [],
  pokemonsLoading: false,
  next: null,
  previous: null,
  filterCriteria: [],
  count: 0,
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SAVE_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload.pokemons],
        next: action.payload.next.replace("https://pokeapi.co/api/v2", ""),
        previous: action.payload.previous,
      };
    case t.SET_FILTER:
      return {
        ...state,
        filterCriteria: action.payload,
      };
    case t.POKEMONS_LOADING:
      return {
        ...state,
        pokemonsLoading: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
