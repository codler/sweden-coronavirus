const cacheFormattedDayDate: { [key: number]: string } = {};
const formattedDayDate = (date: Date) =>
  cacheFormattedDayDate[date.getTime()] ??
  (cacheFormattedDayDate[date.getTime()] = `${date.getFullYear()}-${(
    date.getMonth() +
    1 +
    ""
  ).padStart(2, "0")}-${(date.getDate() + "").padStart(2, "0")}`);

export const today = formattedDayDate(new Date());
export const yesterday = formattedDayDate(
  new Date(Date.now() - 24 * 60 * 60 * 1000)
);
export const oneWeekAgo = formattedDayDate(
  new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
);

export default formattedDayDate;
