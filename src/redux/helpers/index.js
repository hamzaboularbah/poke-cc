import api from "api";

// Get single pokemon by name
export const fetchPokemonByName = (name) => {
  try {
    return api.get(`/pokemon/${name}`).then(({ data }) => data);
  } catch (e) {
    throw new Error(`Error fetching ${name}'s details`);
  }
};
// Get single pokemon by id
export const fetchPokemonById = ({ pokemonId }) => {
  try {
    return api.get(`/pokemon/${pokemonId}`).then(({ data }) => data);
  } catch (e) {
    throw new Error(`Error fetching ${pokemonId}'s details`);
  }
};
