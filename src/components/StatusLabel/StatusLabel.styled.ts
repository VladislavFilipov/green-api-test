import styled, { css } from "styled-components";

import { TStatus } from "@src/components/StatusLabel/StatusLabel";

export const Conatiner = styled.div<{ status: TStatus }>(
  ({ theme, status }) => {
    const statusColor = theme.palette[status].main;
    const statusColorLight = theme.palette[status].light;
    return css`
      color: ${statusColor};
      background-color: ${statusColorLight};
      padding: 5px 15px;
    `;
  }
);
