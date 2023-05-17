import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    height: 100%;
    overflow: auto;
  `
);

export const List = styled.ul(
  ({ theme }) => css`
    margin-top: calc(100vh - 270px);
    padding: 8px 63px;
  `
);
