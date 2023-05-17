import styled, { css } from "styled-components";

export const Input = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 12px 20px 8px;
    background-color: ${theme.palette.bg.main};
  `
);
