import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const City = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin-top: 20px;

  h2 {
    font-size: 3rem;
    text-transform: uppercase;
  }

  span {
    font-weight: 100;
  }
`;

export const Option = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  .temp {
    display: flex;
    overflow-x: scroll;
    width: 500px;
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
  position: relative;
  right: -48%;

  background-color: rgba(255, 255, 255, 0.2);
  transform-origin: 0 0;
  transform: rotate(269deg);

  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  padding: 0.4rem;
`;
