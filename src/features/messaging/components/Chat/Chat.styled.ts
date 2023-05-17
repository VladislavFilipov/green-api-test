import styled, { css } from "styled-components";

import { Text } from "@src/components/Text/Text.styled";

export const Container = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-rows: 59px minmax(60px, 1fr) minmax(62px, max-content);
    max-height: 100%;
    height: 100%;
    border-left: 1px solid ${theme.palette.bg.light};
  `
);

export const Empty = styled.div(
  ({ theme }) => css`
    background-color: ${theme.palette.bg.main};
    grid-row: 1/4;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Text} {
      font-size: 30px;
      font-weight: 800;
    }
  `
);
