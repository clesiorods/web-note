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

  ::-webkit-scrollbar {
      width: 12px !important;
      height: 12px !important;
      transition: .5s all !important;
  }

  ::-webkit-scrollbar-track {
      background: #2e2e2e !important;
      border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
      background-color: #6b6b6b !important;
      border-radius: 2px !important;
      width: 8px !important;
      border: 2px solid #2e2e2e !important;
  }
  ::-webkit-scrollbar-thumb:hover {
      background-color: #b1b1b1 !important;
  }

`;

export default GlobalStyle;