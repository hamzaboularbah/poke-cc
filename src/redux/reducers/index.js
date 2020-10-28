import { combineReducers } from "redux";
import pokemonsReducer from "./pokemonsReducer";
import pokemonTypesReducer from "./pokemonTypesReducer";

export default combineReducers({
  pokemons: pokemonsReducer,
  pokemonTypes: pokemonTypesReducer,
});
