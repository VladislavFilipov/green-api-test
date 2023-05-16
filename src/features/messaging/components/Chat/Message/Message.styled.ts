import styled, { css } from "styled-components";

import TextComp from "@src/components/Text/Text";
import { Container as Time } from "@src/features/messaging/components/Time/Time.styled";
import { TMessageType, TOutgoingMessageStatus } from "@src/types/chat.types";

export const Container = styled.li<{ type: TMessageType }>(
  ({ theme, type }) => css`
    width: 100%;
    margin-bottom: 2px;
    display: flex;

    ${type === "incoming"
      ? css`
          justify-content: flex-start;
          ${Body} {
            background-color: ${theme.palette.bg.main};
          }
        `
      : css`
          justify-content: flex-end;
          ${Body} {
            background-color: ${theme.palette.primary.main};
          }
        `}
  `
);

export const Body = styled.div(
  () => css`
    width: max-content;
    max-width: 65%;
    padding: 6px 7px 8px 9px;
    border-radius: 7.5px;
  `
);

export const Text = styled(TextComp)(
  () => css`
    line-height: 16px;
    white-space: pre-wrap;
  `
);

export const FloatBlock = styled.div(
  () => css`
    position: relative;
    float: right;
    width: max-content;
    display: flex;
    align-items: center;
    margin-left: 7px;
    margin-top: -2px;
    height: 21.6px;
    transform: translate(2px, 8px);

    ${Time} {
      margin-right: 4px;
    }
  `
);

// export const Time = styled(Text)(
//   ({ theme }) => css`
//     color: ${theme.palette.text.dark};
//     font-weight: 600;
//     font-size: 11px;
//   `
// );

export const Status = styled.div<{
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
