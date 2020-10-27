import { useParams } from "react-router-dom";

const Details = () => {
  const { pokemonName } = useParams();
  console.log(pokemonName);
  return <div> Pokemon {pokemonName}'s details page</div>;
};

export default Details;
