import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9rem;
    transition: .3s all;
    overflow: hidden;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;