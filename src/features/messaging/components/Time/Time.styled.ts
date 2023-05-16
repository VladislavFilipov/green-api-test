import styled, { css } from "styled-components";

import Text from "@src/components/Text/Text";

export const Container = styled(Text)(
  ({ theme }) => css`
    color: ${theme.palette.text.dark};
    font-weight: 600;
    font-size: 11px;
  `
);
