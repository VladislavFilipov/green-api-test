import styled, { css } from "styled-components";

import * as TextField from "@src/components/TextField/TextField.styled";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding: 7px 12px;

    ${TextField.Input} {
      background-color: ${theme.palette.bg.main};
    }
  `
);
