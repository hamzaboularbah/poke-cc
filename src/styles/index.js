import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
      font-family: "Lato";
      background-color: #2C3D6C;
  }
  a {
      color: inherit;
    text-decoration: none;
  }

  `;

export const GlobalContainer = styled.div`
  width: 85%;
  padding: 20px 20px;
  margin: 0 auto;
  @media (max-width: 920px) {
    width: 100%;
  }
`;
