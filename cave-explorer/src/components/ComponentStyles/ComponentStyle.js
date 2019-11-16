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
