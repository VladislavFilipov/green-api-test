import styled, { css } from "styled-components";

import * as TextField from "@src/components/TextField/TextField.styled";

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding: 7px 12px;
    position: relative;

    form {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 12px;
    }

    ${TextField.Input} {
      background-color: ${theme.palette.bg.main};
    }

    ${TextField.Wrap} {
      flex-grow: 1;
      width: 100%;
      transition: 0.1s;
    }
  `
);

export const Contact = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    width: 100%;
    height: 60px;
    background-color: ${theme.palette.bg.main};
    z-index: 1;
  `
);
