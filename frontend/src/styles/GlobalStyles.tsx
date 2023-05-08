import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    margin-top: 5px;
    padding: 0;
    text-decoration: none;
    list-style: none;
    color: black;
    width: 1000px;
    margin: 0 auto;
  }

  a {
    list-style : none;
    text-decoration : none;
  }

  .lavender_bold {
    font-weight: bold;
    color: rgb(209, 144, 249);
  }

`;

export default GlobalStyle;