import styled from "styled-components";

export const H3 = styled.h3`
  font-weight: bold;
  font-size: 20px;
`;
export const H2 = styled.h2`
  color: ${({ dark }) => (dark ? "black" : "white")};
  font-weight: bold;
  font-size: 32px;
`;
