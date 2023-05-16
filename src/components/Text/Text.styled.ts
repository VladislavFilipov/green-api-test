import styled, { css } from "styled-components";

import { TSize } from "@src/components/Text/Text";

const sizes: Record<TSize, number> = {
  xl: 20,
  l: 18,
  m: 16,
  s: 14,
  xs: 12
};

export const Text = styled.div<{ size: TSize }>(({ theme, size }) => {
  const curSize = sizes[size];
  return css`
    color: ${theme.palette.text.main};
    font-size: ${curSize}px;

    /* line-height: ${curSize + Math.floor(curSize / 4)}px; */
  `;
});
