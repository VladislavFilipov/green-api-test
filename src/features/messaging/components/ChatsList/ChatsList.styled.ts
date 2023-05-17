import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    display: grid;
    grid-template-rows: 59px max-content minmax(62px, 1fr);
    max-height: 100%;
    height: 100%;
  `
);
export const Head = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    height: 100%;
    background-color: ${theme.palette.bg.main};
  `
);
