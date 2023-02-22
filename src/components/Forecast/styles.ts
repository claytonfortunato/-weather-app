import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
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
  margin-right: 40px;
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

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 350ms all ease-in-out;
  position: relative;
  top: 10%;
  left: -30%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
