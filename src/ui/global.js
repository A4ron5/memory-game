import {createGlobalStyle} from 'styled-components';
import {normalize} from "styled-normalize";

import background from '../assets/background.png'

export const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  body {
    margin: 0;
    font-size: 14px;
    box-sizing: border-box;
    background-color: green;
    background-image: url(${background});
  }
`
