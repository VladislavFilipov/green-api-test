import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-rows: 59px minmax(60px, 1fr) minmax(62px, max-content);
    max-height: 100%;
    height: 100%;
    border-left: 1px solid ${theme.palette.bg.light};
  `
);
