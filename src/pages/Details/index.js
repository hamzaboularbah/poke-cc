import { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonDetails } from "redux/actions";
import TypeTag from "components/TypeTag";
import typesColors from "constants/typesColors";
import { Link } from "react-router-dom";
import ReactApexCharts from "react-apexcharts";
import {
  Charts,
  InfoSection,
  Controls,
  LeftArrow,
  RightArrow,
  Stats,
  Container,
  PokemonImage,
  Types,
  PokemonName,
  StatItemName,
  StatItemValue,
} from "./style";

const Details = () => {
  const dispatch = useDispatch();
  const { pokemonId } = useParams();
  const pokemon = useSelector(({ pokemonDetails }) => pokemonDetails);

  // get current Pokemon
  useEffect(() => {
    dispatch(fetchPokemonDetails(pokemonId));
  }, [pokemonId, dispatch]);

  const apexOptions = {
    series: [
      {
        name: "Series 1",
        data: pokemon.stats.map(({ base_stat }) => base_stat),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
        fontFamily: "Lato",
        toolbar: {
          show: false,
        },
      },
      title: {
        style: {
          display: "none",
        },
      },
      xaxis: {
        categories: pokemon.stats.map(({ name }) => name),
      },
    },
  };

  return (
    <Container>
      <InfoSection>
        <Controls>
          <LeftArrow>
            <Link to={`/${pokemon.id - 1}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-left"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </Link>
          </LeftArrow>
          <RightArrow>
            <Link to={`/${pokemon.id + 1}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </RightArrow>
        </Controls>
        <div>
          <PokemonImage>
            <img src={pokemon.art_work} alt="" />
          </PokemonImage>
          <PokemonName>{pokemon.name}</PokemonName>
          <Types>
            {pokemon.types?.map((type, i) => (
              <TypeTag large key={i} bgColor={typesColors[type]}>
                {type}
              </TypeTag>
            ))}
          </Types>
        </div>
        <Charts id={"chart"}>
          <ReactApexCharts
            options={apexOptions.options}
            series={apexOptions.series}
            type="radar"
            height={350}
            width={"100%"}
          />
        </Charts>
      </InfoSection>
      <Stats>
        <div>
          <StatItemName>Weight</StatItemName>
          <StatItemValue>
            {pokemon.weight ? (pokemon.weight * 0.1).toFixed(1) + " Kg" : ""}
          </StatItemValue>
        </div>
        <div>
          <StatItemName>Height</StatItemName>
          <StatItemValue>
            {pokemon.height ? pokemon.height + " cm" : ""}
          </StatItemValue>
        </div>
        <div>
          <StatItemName>Base Experience</StatItemName>
          <StatItemValue>
            {pokemon.base_experience ? pokemon.base_experience + " Exp" : ""}
          </StatItemValue>
        </div>
        <div>
          <StatItemName>Abilities</StatItemName>
          <StatItemValue>
            {pokemon.abilities.map((ability) => (
              <span key={ability} className="ability">
                {ability}
              </span>
            ))}
          </StatItemValue>
        </div>
        <div>
          <StatItemName>Held Items</StatItemName>
          <StatItemValue>
            {pokemon.held_items.length > 0
              ? pokemon.held_items.map((item) => (
                  <span key={item} className="item">
                    {item}
                  </span>
                ))
              : "-"}
          </StatItemValue>
        </div>
        <div>
          <StatItemName>Forms</StatItemName>
          <StatItemValue>
            {pokemon.forms.length > 0
              ? pokemon.forms.map((form) => (
                  <span key={form} className="form">
                    {form}
                  </span>
                ))
              : "-"}
          </StatItemValue>
        </div>
      </Stats>
    </Container>
  );
};

export default Details;
