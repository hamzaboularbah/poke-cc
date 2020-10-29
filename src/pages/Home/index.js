import PokemonList from "components/PokemonList";
import { useEffect } from "react";
import { loadPokemons, loadPokemonTypes } from "redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { H2 } from "styles/common";
import debounce from "lodash.debounce";
import { Header, FilterInput } from "./style";
import store from "store";
import Spinner from "components/Spinner";
import MultiSelect from "components/MultiSelect";
import t from "redux/actionsTypes";

const Home = () => {
  const { pokemons, filteredPokemons, pokemonsLoading, error } = useSelector(
    ({ pokemons }) => pokemons
  );
  const { pokemonTypes, pokemonTypesLoading } = useSelector(
    ({ pokemonTypes }) => pokemonTypes
  );
  const dispatch = useDispatch();

  // init Pokemon and types
  useEffect(() => {
    dispatch(loadPokemons());
    dispatch(loadPokemonTypes());
  }, [dispatch]);

  // load on scroll
  useEffect(() => {
    window.onscroll = debounce(() => {
      const {
        pokemons: { next: loadMoreURL },
      } = store.getState();
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        dispatch(loadPokemons(loadMoreURL));
      }
    }, 200);
  });

  const handlePokemonFilter = (e) => {
    dispatch({
      type: t.SET_FILTER,
      payload: e ? e.map(({ value }) => value) : [],
    });
  };

  return (
    <div>
      <Header>
        <H2>Explore Pokemon</H2>
        <FilterInput>
          {pokemonTypes.length > 0 && (
            <MultiSelect
              isLoadingMessage={"Loading types"}
              isLoading={pokemonTypesLoading}
              placeholder={"Filter pokemon by type"}
              options={pokemonTypes.map(({ name }) => ({
                value: name,
                label: name.charAt(0).toUpperCase() + name.slice(1),
              }))}
              onChange={handlePokemonFilter}
            />
          )}
        </FilterInput>
      </Header>

      {pokemons.length > 0 && (
        <PokemonList
          pokemons={filteredPokemons.length > 0 ? filteredPokemons : pokemons}
        />
      )}
      {error && <p role="alert">Oops ! Error loading pokemons</p>}

      {pokemonsLoading && <Spinner color={"transparent"} />}
    </div>
  );
};

export default Home;
