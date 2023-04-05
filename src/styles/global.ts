import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

  }

  body {
    background: ${({ theme }) => theme.colors['background-color']};
    font-family: 'Inter', sans-serif;
    color: white;
    -webkit-font-smoothing: antialiased;
  }

  a, button, li {
    border: none;
    cursor: pointer;
  }

  a {
  text-decoration: none;
  }

  input {
    border: none;
  }
`;
