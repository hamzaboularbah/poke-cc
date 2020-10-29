import { call, put, takeLatest } from "redux-saga/effects";
import t from "redux/actionsTypes";
import { fetchPokemons } from "api";

export function* loadPokemonsSaga() {
  yield takeLatest(t.LOAD_POKEMONS, loadPokemonsWorkerSaga);
}

function* loadPokemonsWorkerSaga({ payload: { loadMoreURL } }) {
  try {
    yield put({ type: t.POKEMONS_LOADING, payload: true });
    const pokemonsResponse = yield call(fetchPokemons, { loadMoreURL });
    yield put({ type: t.SAVE_POKEMONS, payload: pokemonsResponse });
    yield put({ type: t.POKEMONS_LOADING, payload: false });
  } catch (e) {
    yield put({ type: t.POKEMONS_LOADING_ERROR, payload: "oops ! error" });
    yield put({ type: t.POKEMONS_LOADING, payload: false });
  }
}
