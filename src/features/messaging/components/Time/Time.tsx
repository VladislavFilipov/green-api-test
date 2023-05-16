import { FC } from "react";

import { formatUnixDateToTime } from "@src/utils/functions/format/date";

import * as S from "./Time.styled";

type TProps = { timestamp: number; onlyCurDay?: boolean };
const Time: FC<TProps> = ({ timestamp, onlyCurDay = true }) => {
  const curDayTime = formatUnixDateToTime(timestamp);
  return <S.Container>{curDayTime}</S.Container>;
};

export default Time;
