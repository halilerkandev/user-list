import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    color: #b2bbc8;
    font-family: Avenir, Nunito, sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
`;

export default GlobalStyle;
