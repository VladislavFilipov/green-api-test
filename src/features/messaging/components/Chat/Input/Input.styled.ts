import styled, { css } from "styled-components";

export const Input = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    background-color: ${theme.palette.bg.main};
  `
);
