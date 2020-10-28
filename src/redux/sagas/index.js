import * as pokemonSagas from "./pokemonsSagas";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...Object.values(pokemonSagas)].map(fork));
}
