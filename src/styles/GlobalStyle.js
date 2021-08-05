import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
  }
`;

export default GlobalStyle;
