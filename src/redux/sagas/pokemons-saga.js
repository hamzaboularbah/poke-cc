import { call, put, takeLatest } from "redux-saga/effects";
import t from "redux/actionsTypes";
import api from "api";

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
    console.error(e);
    yield put({ type: t.POKEMONS_LOADING, payload: false });
  }
}

// Helpers

// Fetch a list of pokemon names
// Chaining promises and checking Promise.all

const fetchPokemons = ({ loadMoreURL }) => {
  const requestOptions = loadMoreURL
    ? { endpoint: loadMoreURL, params: {} }
    : { endpoint: "/pokemon", params: { limit: 20 } };

  try {
    return api
      .get(requestOptions.endpoint, { params: { ...requestOptions.params } })
      .then(({ data: { results, next, previous, count } }) =>
        Promise.all(results.map((pokemon) => fetchPokemon(pokemon))).then(
          (pokemons) => ({
            pokemons,
            next,
            previous,
            count,
          })
        )
      )
      .then((data) => data);
  } catch (e) {
    throw new Error(`Error Fetching Pokemon List`);
  }
};

// Get pokemon details for each pokemon
const fetchPokemon = (pokemon) => {
  try {
    return api.get(`/pokemon/${pokemon.name}`).then(({ data }) => data);
  } catch (e) {
    throw new Error(`Error fetching ${pokemon.name}'s details`);
  }
};
