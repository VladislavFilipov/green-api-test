import styled, { css } from "styled-components";

import Text from "@src/components/Text/Text";

const avatarSize = "49px";

export const Container = styled.li<{ active: boolean }>(
  ({ theme, active }) => css`
    height: 72px;
    max-width: 100%;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: minmax(1fr, ${avatarSize}) max-content;
    align-content: center;
    padding: 0 15px;
    column-gap: 13px;
    row-gap: 5px;
    position: relative;
    margin-bottom: 1px;
    overflow: hidden;
    cursor: pointer;

    &::after {
      position: absolute;
      bottom: -1px;
      height: 1px;
      left: 77px;
      right: 5px;
      background-color: ${theme.palette.bg.light};
      content: " ";
    }

    &:hover {
      background-color: ${theme.palette.bg.main};
    }

    ${active &&
    css`
      background-color: ${theme.palette.bg.light} !important;
    `}
  `
);

const Line = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    overflow: hidden;
  `
);

export const Line1 = styled(Line)(
  () => css`
    justify-content: space-between;
  `
);

export const Line2 = styled(Line)(
  () => css`
    margin-right: 20px;
  `
);

// export const Line2 = styled(Line)(() => css``);

export const Avatar = styled.div(
  () => css`
    height: ${avatarSize};
    width: ${avatarSize};
    border-radius: 50%;
    background-color: white;
    grid-row: 1/3;
  `
);

const CuttedText = styled(Text)(
  () => css`
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
);

export const Name = styled(CuttedText)(
  () => css`
    align-self: flex-end;
  `
);

export const LastMsg = styled(CuttedText)(
  ({ theme }) => css`
    align-self: flex-start;
    color: ${theme.palette.text.dark};
  `
);
