import * as pokemonSagas from "./pokemons-saga";
import * as pokemonTypesSagas from "./pokemonTypes-saga";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all(
    [...Object.values(pokemonSagas), ...Object.values(pokemonTypesSagas)].map(
      fork
    )
  );
}
