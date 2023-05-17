import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    display: grid;
    grid-template-rows: 59px max-content minmax(62px, 1fr);
    max-height: 100%;
    height: 100%;
  `
);
