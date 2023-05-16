import styled, { css } from "styled-components";

export const ButtonWrap = styled.button(
  ({ theme }) => css`
    appearance: none;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    padding: 0 20px;
    border-radius: 18px;
    background-color: ${theme.palette.primary.main};
    cursor: pointer;

    &:hover {
      background-color: ${theme.palette.primary.dark};
    }

    &:active {
      background-color: ${theme.palette.primary.light};
    }
  `
);
