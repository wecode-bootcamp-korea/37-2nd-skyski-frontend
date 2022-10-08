import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    background-color: ${props => props.theme.style.backgroundWhite};
  }
`;

export default GlobalStyle;
