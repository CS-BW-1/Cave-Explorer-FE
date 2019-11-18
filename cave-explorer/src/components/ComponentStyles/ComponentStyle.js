import styled from "styled-components";

export const StyledGrid = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template: ${({ width, height }) =>
    `repeat(${width}, 2.5vmin) / repeat(${height}, 2.5vmin)`};
  z-index: 10;
  @media (min-width: 90rem) {
    grid-template: ${({ width, height }) =>
      `repeat(${width}, 1.5rem) / repeat(${height}, 1.5rem)`};
  }
`;

export const StyledPlayer = styled.div`
  background: #fff;
  margin: 2px;
  border-radius: 2px;
`;

export const StyledDashBoard = styled.div`
  width: 25%;
  text-align: center;
  margin: 10px 8%;
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-around;
  color: #fff;

  button {
    margin: 10px auto;
    padding: 20px;
    font-family: "Press Start 2P", cursive;
    font-weight: bold;
    font-size: 18px;
    background-color: lightgray;
    text-shadow: -1px -1px black, 1px 1px white;
    color: gray;
    border-radius: 7px;
    box-shadow: 0 0.2em gray;
    cursor: pointer;

    &:active {
      box-shadow: none;
      position: relative;
      top: 0.2em;
    }
  }

  h1 {
    font-family: "Press Start 2P", cursive;
    font-size: 24px;
    margin: 10px 0;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }
  h4 {
    font-size: 18px;
  }
  span {
    color: red;
  }
`;
