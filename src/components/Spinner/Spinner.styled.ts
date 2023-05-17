import styled, { css } from "styled-components";

import { Container as IconButton } from "@src/components/IconButton/IconButton.styled";

export const Container = styled.div(
  ({ theme }) => css`
    ${IconButton} {
      animation: rotation 1s infinite linear;
    }
  `
);
