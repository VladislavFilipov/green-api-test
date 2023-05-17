import styled, { DefaultTheme, css } from "styled-components";

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

type TInputBlockProps = {
  theme: DefaultTheme;
  hasError: boolean;
  isTextarea: boolean;
};
const InputBlock = ({ theme, hasError }: TInputBlockProps) => css`
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
`;

export const Input = styled.input<TInputBlockProps>(
  props => css`
    ${InputBlock(props)}
  `
);

export const Textarea = styled.textarea<TInputBlockProps>(
  props => css`
    ${InputBlock(props)}
    padding: 7px 11px 10px;
    resize: none;
    line-height: 20px;
    overflow-x: hidden;
    max-height: 200px !important;

    &::placeholder {
      line-height: 19px;
      font-weight: 400;
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
