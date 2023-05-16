import styled, { css } from "styled-components";

import { TOutgoingMessageStatus } from "@src/types/chat.types";

export const Container = styled.div<{
  status: TOutgoingMessageStatus;
}>(
  ({ theme, status }) => css`
    ${status === "read"
      ? css`
          svg {
            color: ${theme.palette.msgStatus.main};
          }
        `
      : css`
          svg {
            color: ${theme.palette.text.dark};
          }
        `}
  `
);
