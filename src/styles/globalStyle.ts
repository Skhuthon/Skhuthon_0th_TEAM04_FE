import { createGlobalStyle } from "styled-components";

import DefaultFont from "@/assets/fonts/갤럭시X온글잎-민정0507.ttf";
import PointFont from "@/assets/fonts/YClover TTF-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: "default";
      src: local("default"), url(${DefaultFont}) format('truetype'); 
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: "point";
      src: local("point"), url(${PointFont}) format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "default";
  }

  body{
    all:unset;
    /* text-decoration: none; */
    background: ${({ theme }) => theme.color.background};
    color:${({ theme }) => theme.color.text};
    font-size:${({ theme }) => theme.fontSize.medium};
  }

`;
