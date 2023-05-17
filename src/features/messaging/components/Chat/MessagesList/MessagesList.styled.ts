import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    height: 100%;
    overflow: auto;
  `
);

export const List = styled.ul(
  () => css`
    margin-top: calc(100vh - 270px);
    padding: 8px 63px;
  `
);
