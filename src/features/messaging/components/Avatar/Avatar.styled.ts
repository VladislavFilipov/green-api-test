import styled, { css } from "styled-components";

import { ReactComponent as AvatarPlaceholderSVG } from "@src/assets/img/icons/avatar-placeholder.svg";
import Text from "@src/components/Text/Text";

export const Container = styled(Text)<{ size?: number }>(
  ({ size = 49 }) => css`
    width: ${size}px;
    height: ${size}px;
    grid-row: 1/3;
  `
);

export const Image = styled.img<{ size?: number }>(
  () => css`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;

    /* background-repeat: none;
    background-position: center;
    background-size: cover; */
  `
);
