import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    /* display: flex;
    flex-direction: column;
    justify-content: flex-end; */
    height: 100%;
    overflow: auto;
  `
);

export const List = styled.ul(
  ({ theme }) => css`
    /* overflow: auto; */
    padding: 8px 63px;
  `
);
