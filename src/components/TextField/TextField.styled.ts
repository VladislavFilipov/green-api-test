import styled, { css } from "styled-components";

import Text from "@src/components/Text/Text";

export const Wrap = styled.div`
  width: 100%;
`;

export const Label = styled(Text)(
  () => css`
    margin-left: 8px;
    margin-bottom: 2px;
    font-weight: 600;
  `
);

export const Input = styled.input<{ hasError: boolean }>(
  ({ theme, hasError }) => css`
    height: 38px;
    border-radius: 8px;
    background-color: ${theme.palette.bg.light};
    border: 1px solid ${theme.palette.bg.light};
    width: 100%;
    padding: 0 11px;
    caret-color: ${theme.palette.text.main};
    color: ${theme.palette.text.main};
    font-size: 15px;

    ${hasError &&
    css`
      border: 1px solid ${theme.palette.error.main};
    `}

    &::placeholder {
      color: ${theme.palette.text.dark};
      font-weight: 500;
      padding: 0 5px;
    }

    &:-webkit-autofill {
      appearance: none;
    }
  `
);

export const Error = styled(Text)(
  ({ theme }) => css`
    margin-left: 8px;
    margin-top: 2px;
    font-weight: 600;
    color: ${theme.palette.error.main};
  `
);
