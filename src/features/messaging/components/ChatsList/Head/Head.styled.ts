import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 12px;
    background-color: ${theme.palette.bg.main};
  `
);
