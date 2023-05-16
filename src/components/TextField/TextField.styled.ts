import styled, { css } from "styled-components";

export const Wrap = styled.div`
  width: 100%;
`;

export const Label = styled.div``;

export const Input = styled.input(
  ({ theme }) => css`
    height: 40px;
    border-radius: 8px;
    background-color: ${theme.palette.bg.light};
    width: 100%;
    padding: 0 12px;
    caret-color: ${theme.palette.text.main};
    color: ${theme.palette.text.main};
    font-size: 15px;

    &::placeholder {
      color: ${theme.palette.text.dark};
      font-weight: 500;
      padding: 0 5px;
    }
  `
);

export const Error = styled.div``;
