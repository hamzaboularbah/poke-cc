import axios from "axios";

const http = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  responseType: "json",
});

// Get single pokemon by id
export const fetchPokemonById = ({ pokemonId }) => {
  try {
    return http.get(`/pokemon/${pokemonId}`).then(({ data }) => data);
  } catch (e) {
    throw new Error(`Error fetching ${pokemonId}'s details`);
  }
};

// Get single pokemon by name
export const fetchPokemonByName = (name) => {
  try {
    return http.get(`/pokemon/${name}`).then(({ data }) => data);
  } catch (e) {
    throw new Error(`Error fetching ${name}'s details`);
  }
};

// Fetch a list of pokemon names
// Chaining promises and checking Promise.all
export const fetchPokemons = ({ loadMoreURL }) => {
  const requestOptions = loadMoreURL
    ? { endpoint: loadMoreURL, params: {} }
    : { endpoint: "/pokemon", params: { limit: 20 } };

  try {
    return http
      .get(requestOptions.endpoint, { params: { ...requestOptions.params } })
      .then(({ data: { results, next, previous, count } }) =>
        Promise.all(
          results.map((pokemon) => fetchPokemonByName(pokemon.name))
        ).then((pokemons) => ({
          pokemons,
          next,
          previous,
          count,
        }))
      )
      .then((data) => data);
  } catch (e) {
    return e;
  }
};

// fetch pokemon Types
export const fetchPokemonTypes = async () => {
  try {
    const { data } = await http.get("/type");
    return data.results;
  } catch (e) {
    console.error(e);
  }
};
