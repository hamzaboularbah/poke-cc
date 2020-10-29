import { combineReducers } from "redux";
import pokemonsReducer from "./pokemonsReducer";
import pokemonTypesReducer from "./pokemonTypesReducer";
import pokemonDetailsReducer from "./pokemonDetailsReducer";

export default combineReducers({
  pokemons: pokemonsReducer,
  pokemonTypes: pokemonTypesReducer,
  pokemonDetails: pokemonDetailsReducer,
});
