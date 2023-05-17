import styled, { css } from "styled-components";

export const Container = styled.button(
  ({ theme }) => css`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${theme.palette.iconColor.main};
    background-color: transparent;

    &:hover {
      svg {
        color: white;
      }

      /* background-color: ${theme.palette.bg.light}; */
    }
  `
);
