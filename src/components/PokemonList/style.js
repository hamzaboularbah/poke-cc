import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 30px;
  position: relative;
  p {
    position: absolute;
    text-align: center;
    color: white;
    width: 100%;
    font-size: 32px;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
`;
