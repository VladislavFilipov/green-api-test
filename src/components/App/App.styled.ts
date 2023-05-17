import styled, { css } from "styled-components";

export const App = styled.div(
  ({ theme }) => css`
    padding: 19px;
    background-color: ${theme.palette.bg.dark};
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  `
);
