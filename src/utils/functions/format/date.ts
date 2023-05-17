export const formatUnixDateToTime = (dateNumber: number | Date) => {
  const date = new Date(dateNumber);
  return (
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
  );
};
