import styled from "styled-components";
import { H3 } from "styles/common";

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  position: relative;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  background-color: white;
  &:hover {
    transform: translateY(-1px) scale(1.01);
    svg {
      opacity: 1;
      transform: translateX(3px);
    }
  }
`;
export const CardContent = styled.div`
  width: 100%;
`;
export const CardFooter = styled.div`
  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 500;
    padding: 10px 0px;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
    color: black;

    span,
    svg {
      color: rgba(0, 0, 0, 0.8);
      display: block;
    }
    span {
      letter-spacing: 1px;
      margin-left: 24px;
    }
    svg {
      transition: all 0.3s ease;
      transform: translateX(-2px);
      opacity: 0;
    }
  }
`;
export const PokemonArwork = styled.div`
  background-color: #fbfbfb;
  width: 100%;
  min-height: 210px;
  text-align: center;
  img {
    max-width: 80%;
  }
`;
export const PokemonInfos = styled.div`
  padding: 22px;
`;
export const InfosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Types = styled.div`
  width: 65%;
  display: flex;
  justify-content: flex-end;
`;
export const Type = styled.div`
  text-transform: capitalize;
  padding: 5px 10px;
  color: white;
  text-align: center;
  border-radius: 20px;
  font-size: 14px;
  margin-right: 5px;
  display: block;
  background-color: ${({ bgColor }) => bgColor};
  &:last-of-type {
    margin-right: 0px;
  }
`;
export const NameAndID = styled.div`
  width: 30%;
`;
export const Name = styled(H3)`
  text-transform: capitalize;
  margin-bottom: 10px;
`;
export const Index = styled.span`
  display: block;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
`;
export const PokemonLightStats = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
export const StatItem = styled.div`
  display: block;
`;
export const StatItemName = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
`;
export const StatItemValue = styled.div`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.8);
`;
