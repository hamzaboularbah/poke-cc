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
      font-family: "Roboto";
  }
  a {
    text-decoration: none;
  }

  `;

export const GlobalContainer = styled.div`
  width: 80%;
  padding: 20px 20px;
  margin: 0 auto;
`;
