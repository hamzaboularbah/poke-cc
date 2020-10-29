import t from "../actionsTypes";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  pokemonsLoading: false,
  next: null,
  previous: null,
  count: 0,
  error: null,
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
        filteredPokemons: state.pokemons.filter(({ types }) =>
          types
            .map(({ type: { name } }) => name)
            .some((type) => action.payload.includes(type))
        ),
      };
    case t.POKEMONS_LOADING:
      return {
        ...state,
        pokemonsLoading: action.payload,
      };
    case t.POKEMONS_LOADING_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
