import { call, put, takeLatest } from "redux-saga/effects";
import t from "redux/actionsTypes";
import api from "api";

export function* loadPokemonsSaga() {
  yield takeLatest(t.LOAD_POKEMON_TYPES, loadPokemonTypesWorkerSaga);
}

function* loadPokemonTypesWorkerSaga() {
  try {
    yield put({ type: t.POKEMON_TYPES_LOADING, payload: true });
    const pokemonTypesResponse = yield call(fetchPokemonTypes);
    yield put({ type: t.SAVE_POKEMON_TYPES, payload: pokemonTypesResponse });
    yield put({ type: t.POKEMON_TYPES_LOADING, payload: false });
  } catch (e) {
    console.error(e);
    yield put({ type: t.POKEMON_TYPES_LOADING, payload: false });
  }
}

const fetchPokemonTypes = async () => {
  try {
    const { data } = await api.get("/type");
    return data.results;
  } catch (e) {
    console.error(e);
  }
};
