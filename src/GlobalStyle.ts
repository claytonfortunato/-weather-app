import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  width: 100%;
  height: 100vh;
  
  background: url('assets/sunset.jpg') no-repeat center center fixed;
  background-size: cover;
  
}


`;
