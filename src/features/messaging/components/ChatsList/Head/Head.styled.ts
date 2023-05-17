import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    height: 100%;
    background-color: ${theme.palette.bg.main};
  `
);
