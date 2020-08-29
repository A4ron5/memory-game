import {createGlobalStyle} from 'styled-components';
import {normalize} from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  body {
    margin: 0;
    background: mediumseagreen;
    font-size: 14px;
    box-sizing: border-box;
  }
`
