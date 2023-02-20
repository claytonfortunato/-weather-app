import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.2);

  div {
    margin: auto;
  }

  .temp {
    display: flex;
    overflow-x: scroll;
  }
`;
