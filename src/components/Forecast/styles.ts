import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: flex-end;

  gap: 20px;
`;

export const Option = styled.div`
  width: 200px;

  .temp {
    display: flex;
    overflow-x: scroll;
    width: 400px;
  }
`;

export const Sun = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 1rem;
  padding: 0.4rem 0;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.2);
`;
