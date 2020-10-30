import styled from "styled-components";
import { H2 } from "styles/common";

export const Container = styled.div`
  padding: 20px 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
`;

export const PokemonImage = styled.div`
  text-align: center;
  img {
    max-width: 250px;
    width: 100%;
  }
`;

export const Types = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  > div {
  }
`;

export const PokemonName = styled(H2)`
  color: black;
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  text-transform: capitalize;
`;

export const Charts = styled.div`
  max-width: 400px;
  @media (max-width: 920px) {
    margin-top: -50px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const Controls = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 60%;
  top: 200px;
  @media (max-width: 920px) {
    width: 70%;

    top: 150px;
  }
  @media (max-width: 480px) {
    width: 86%;

    top: 150px;
  }
`;

export const LeftArrow = styled.div`
  cursor: pointer;
  @media (max-width: 920px) {
    align-self: flex-start;
  }
`;
export const RightArrow = styled.div`
  cursor: pointer;
  @media (max-width: 920px) {
    align-self: flex-start;
  }
`;

export const Stats = styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 20px;
  margin: 30px auto;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(132px, 1fr));
  }
`;

export const StatItemName = styled.h4`
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.3);
  font-size: 18px;
`;

export const StatItemValue = styled.p`
  color: rgba(0, 0, 0, 0.8);
  .ability,
  .item,
  .form {
    text-transform: capitalize;
    line-height: 24px;
    &::after {
      content: ",       ";
    }
    &:last-child {
      &::after {
        content: "";
      }
    }
  }
`;

export const Sprites = styled.div`
  margin: 80px auto;
  max-width: 900px;
  width: 100%;
  @media (max-width: 480px) {
    text-align: center;
  }
  h2 {
    margin-bottom: 20px;
  }
`;
