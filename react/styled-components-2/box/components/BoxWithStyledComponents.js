import styled, { css } from "styled-components";

// Bonus Refactoring

export const BoxWithStyledComponents = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  &:hover {
    background-color: red;
  }

  ${({ $isBlack: iB }) =>
    iB &&
    css`
      background-color: black;
    `}
`;

// Original Solution

/* export default function BoxWithStyledComponent({ $isBlack }) {
    return <StyledBox $isBlack={$isBlack}></StyledBox>;
  }
  
  export const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: green;
    margin: 2rem;
  
    &:hover {
      background-color: red;
    }
  
    ${({ $isBlack: iB }) =>
      iB &&
      css`
        background-color: black;
      `}
  `; */
