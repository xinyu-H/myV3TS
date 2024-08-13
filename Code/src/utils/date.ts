/**
 * 获取某年某月有多少天
 * @param year
 * @param month
 * @returns
 */
export function getMonthDay(year: number, month: number): number {
  let days = new Date(year, month, 0).getDate();
  return days;
}
