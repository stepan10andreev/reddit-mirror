import { getPadTime } from "./getPadTime";

export function getDate(time: number): string {
  const date = new Date(time * 1000);
  const [MM, DD, YY] = [
  date.getMonth() + 1,
  date.getDate(),
  date.getFullYear(),
  ];
  const [HH, MIN] = [
  date.getHours(),
  date.getMinutes(),
  ];
  const month = getPadTime(MM);
  const day = getPadTime(DD);
  const year = YY.toString();
  const hour = getPadTime(HH);
  const minutes = getPadTime(MIN);

  let dateValue =  `${day}.${month}.${year} ${hour}:${minutes}`;

  return dateValue

}
