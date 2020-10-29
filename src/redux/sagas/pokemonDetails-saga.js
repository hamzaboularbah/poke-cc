import t from "redux/actionsTypes";
import { fetchPokemonById } from "api";
import { call, put, takeLatest } from "redux-saga/effects";

export function* fetchPokemonDetailsSaga() {
  yield takeLatest(t.FETCH_POKEMON_DETAILS, fetchPokemonDetailsWorkerSaga);
}

function* fetchPokemonDetailsWorkerSaga({ payload }) {
  try {
    yield put({ type: t.POKEMON_DETAILS_LOADING, payload: true });
    const pokemonDetailsResponse = yield call(fetchPokemonById, {
      pokemonId: payload,
    });
    yield put({
      type: t.SAVE_POKEMON_DETAILS,
      payload: pokemonDetailsResponse,
    });
    yield put({ type: t.POKEMON_DETAILS_LOADING, payload: false });
  } catch (e) {
    window.location.replace("/");
    yield put({ type: t.POKEMON_DETAILS_LOADING, payload: false });
  }
}
