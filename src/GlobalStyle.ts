import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  
  background: rgb(170, 130, 183);
  background: linear-gradient(
    90deg,
    rgba(170, 130, 183, 1) 0%,
    rgba(245, 118, 111, 1) 50%,
    rgba(249, 192, 111, 1) 100%
  );
}

`;
