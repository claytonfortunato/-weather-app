import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 980px;
  width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 20px 0px;
  }

  ul {
    max-width: 500px;
    background-color: #fff;
    text-align: center;
    position: absolute;
    top: 19%;
    left: 36%;
  }

  li {
    list-style: none;
  }

  .btn {
    border: none;
    cursor: pointer;
    width: 100%;
    background-color: #fff;
    text-align: left;
    line-height: 1px;

    &:hover {
      background-color: #ddd;
    }
  }
`;

export const Header = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
`;

export const Search = styled.div`
  input {
    padding: 8px;
    border-radius: 10px;
    border: none;
    outline: none;
  }

  button {
    font-size: 1rem;
    padding: 6px;
    border-radius: 10px;
    border: 1px solid #fff;
    margin-left: 0.2rem;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
    transition: 350ms all ease-in-out;

    &:hover {
      background-color: #fff;
      color: #333;
    }
  }
`;
