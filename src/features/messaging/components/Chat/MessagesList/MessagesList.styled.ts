import styled, { css } from "styled-components";

import bgChat from "@src/assets/img/bg-chat.png";

export const Container = styled.div(
  ({ theme }) => css`
    height: 100%;
    overflow: auto;

    /* background-image: url(${bgChat});
    background-size: 40%;
    opacity: 0.1; */
  `
);

export const List = styled.ul(
  ({ theme }) => css`
    /* overflow: auto; */
    padding: 8px 63px;
  `
);
