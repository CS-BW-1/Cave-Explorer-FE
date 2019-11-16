import styled from "styled-components";

export const GameContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b1e23;
`;
export const GameArena = styled.section`
  width: 50vw;
  position: relative;
  display: grid;
  grid-template: ${({ width, height }) =>
    `repeat(${width}, 2.5vmin) / repeat(${height}, 2.5vmin)`};
  justify-content: center;
  justify-self: center;
  align-self: center;
  box-shadow: 0 2rem 2rem -2rem rgba(0, 0, 0, 0.24);
  border: 1px solid green;
  @media (min-width: 90rem) {
    grid-template: ${({ width, height }) =>
      `repeat(${width}, 1.5rem) / repeat(${height}, 1.5rem)`};
  }
`;
