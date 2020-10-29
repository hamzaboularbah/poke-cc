import t from "../actionsTypes";

const initialState = {
  id: null,
  isPokemonLoading: false,
  art_work: null,
  types: [],
  stats: [],
  abilities: [],
  held_items: [],
  forms: [],
  sprites: [],
};

const pokemonDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SAVE_POKEMON_DETAILS:
      return {
        ...state,
        ...action.payload,
        art_work:
          action.payload.sprites.other["official-artwork"].front_default,
        abilities: action.payload.abilities.map(
          ({ ability: { name } }) => name
        ),
        held_items: action.payload.held_items.map(({ item: { name } }) => name),
        forms: action.payload.forms.map(({ name }) => name),
        types: action.payload.types.map(({ type: { name } }) => name),
        stats: action.payload.stats.map(({ base_stat, stat: { name } }) => ({
          name,
          base_stat,
        })),
        sprites: Object.keys(action.payload.sprites)
          .filter((key) => key !== "other" && key !== "versions")
          .map((key) => action.payload.sprites[key]),
      };
    case t.POKEMON_DETAILS_LOADING:
      return {
        ...state,
        isPokemonLoading: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonDetailsReducer;
