import styled, { css } from "styled-components";

import { ButtonWrap as Button } from "@src/components/Button/_elements/ButtonWrap.styled";
import Text from "@src/components/Text/Text";
import { Wrap as Input } from "@src/components/TextField/TextField.styled";

export const Form = styled.form(
  ({ theme }) => css`
    max-width: 500px;
    padding: 30px 50px;
    background-color: ${theme.palette.bg.main};
    display: flex;
    flex-direction: column;

    ${Input} {
      margin-bottom: 15px;
    }

    ${Button} {
      margin: 15px auto 0;
      width: 100px;
    }
  `
);

export const Title = styled(Text)(
  () => css`
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 30px;
    text-align: center;
  `
);
