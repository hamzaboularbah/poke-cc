import t from "../actionsTypes";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  filterCriteria: [],
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
        filteredPokemons:
          state.filterCriteria.length > 0
            ? state.pokemons.filter(({ types }) =>
                types
                  .map(({ type: { name } }) => name)
                  .some((type) => state.filterCriteria.includes(type))
              )
            : [],
        next: action.payload.next.replace("https://pokeapi.co/api/v2", ""),
        previous: action.payload.previous,
      };
    case t.FILTER_POKEMONS:
      return {
        ...state,
        filterCriteria: action.payload,
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
