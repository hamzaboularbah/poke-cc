import typesColors from "constants/typesColors";
import { Link } from "react-router-dom";
import TypeTag from "components/TypeTag";
import {
  Container,
  CardContent,
  CardFooter,
  PokemonArwork,
  PokemonInfos,
  InfosHeader,
  Types,
  NameAndID,
  Name,
  Index,
  PokemonLightStats,
  StatItem,
  StatItemName,
  StatItemValue,
} from "./style";

const PokemonCard = ({
  pokemon: {
    id,
    name,
    base_experience,
    weight,
    types,
    height,
    sprites: { other },
  },
}) => {
  return (
    <Container>
      <CardContent>
        <PokemonArwork>
          <img src={other["official-artwork"].front_default} alt="" />
        </PokemonArwork>
        <PokemonInfos>
          <InfosHeader>
            <NameAndID>
              <Name>{name}</Name>
              <Index>#{id}</Index>
            </NameAndID>
            <Types>
              {types.map(({ type: { name } }) => (
                <TypeTag key={name} bgColor={typesColors[name]}>
                  {name}
                </TypeTag>
              ))}
            </Types>
          </InfosHeader>
          <PokemonLightStats>
            <StatItem>
              <StatItemName>Height</StatItemName>
              <StatItemValue>{height}</StatItemValue>
            </StatItem>
            <StatItem>
              <StatItemName>Weight</StatItemName>
              <StatItemValue>{weight}</StatItemValue>
            </StatItem>
            <StatItem>
              <StatItemName>Base Experience</StatItemName>
              <StatItemValue>{base_experience}</StatItemValue>
            </StatItem>
          </PokemonLightStats>{" "}
        </PokemonInfos>
      </CardContent>
      <CardFooter>
        <Link to={`/${id}`}>
          <span>more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(0, 0, 0, 0.7)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      </CardFooter>
    </Container>
  );
};

export default PokemonCard;
