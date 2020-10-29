import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 10px 0px 40px;
  @media (max-width: 712px) {
    margin-top: 20px;
  }
`;
export const FilterInput = styled.div`
  width: 300px;
  @media (max-width: 712px) {
    margin-top: 20px;
  }
`;
