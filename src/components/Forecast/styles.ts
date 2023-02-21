import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const City = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  h2 {
    font-size: 3rem;
    color: #fff;
  }

  h1 {
    color: #fff;
  }
`;

export const Option = styled.div`
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

export const Description = styled.p`
  display: flex;

  transform-origin: 0 0;
  transform: rotate(269deg);
`;
