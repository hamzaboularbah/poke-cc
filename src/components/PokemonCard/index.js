import typesColors from "constants/typesColors";
import styled from "styled-components";
import { H2 } from "styles/common";

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-1px) scale(1.01);
  }
`;

const CardContent = styled.div`
  width: 100%;
`;

const CardFooter = styled.div`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  padding: 10px 0px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  color: black;
  &:hover {
    color: white;
    background-color: #00a8ff;
  }
`;
const PokemonArwork = styled.div`
  background-color: #fbfbfb;
  width: 100%;
  text-align: center;
  img {
    max-width: 80%;
  }
`;

const PokemonInfos = styled.div`
  padding: 20px 15px;
`;
const InfosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Abilities = styled.div`
  width: 65%;
  display: flex;
  justify-content: flex-end;
`;
const Ability = styled.div`
  padding: 5px 10px;
  color: white;
  text-align: center;
  border-radius: 20px;
  font-size: 14px;
  margin-right: 5px;
  background-color: ${({ bgColor }) => bgColor};
  &::last-of-type {
    margin-right: 0px;
  }
`;

const NameAndID = styled.div`
  width: 30%;
`;

const Name = styled(H2)`
  margin-bottom: 10px;
`;
const Index = styled.span`
  display: block;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
`;

const PokemonLightStats = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const StatItem = styled.div``;
const StatItemName = styled.div`
  font-size: 12px;

  color: rgba(0, 0, 0, 0.3);
`;
const StatItemValue = styled.div`
  margin-top: 10px;
`;

const PokemonCard = () => {
  return (
    <Container>
      <CardContent>
        <PokemonArwork>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
            alt=""
          />
        </PokemonArwork>
        <PokemonInfos>
          <InfosHeader>
            <NameAndID>
              <Name>Zygarde</Name>
              <Index>#718</Index>
            </NameAndID>
            <Abilities>
              <Ability bgColor={typesColors["fire"]}>Fire</Ability>
              <Ability bgColor={typesColors["normal"]}>Potatos</Ability>
            </Abilities>
          </InfosHeader>
          <PokemonLightStats>
            <StatItem>
              <StatItemName>Height</StatItemName>
              <StatItemValue>20</StatItemValue>
            </StatItem>
            <StatItem>
              <StatItemName>Weight</StatItemName>
              <StatItemValue>20</StatItemValue>
            </StatItem>
            <StatItem>
              <StatItemName>Base Experience</StatItemName>
              <StatItemValue>20</StatItemValue>
            </StatItem>
          </PokemonLightStats>{" "}
        </PokemonInfos>
      </CardContent>
      <CardFooter>More</CardFooter>
    </Container>
  );
};

export default PokemonCard;
