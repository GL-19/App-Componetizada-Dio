import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black:  rgb(17, 17, 17);
    --lightGray: rgb(194, 194, 194);
    --darkGray:  #777;
    --veryDarkGray: rgb(51, 51, 51);
  }

  * {
    box-sizing:border-box ;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    font-family: 'Roboto Slab', 'sans-serif', serif;
  }

  body {
    color: var(--lightGray);
    background-color: var(--veryDarkGray);
  }
`;
