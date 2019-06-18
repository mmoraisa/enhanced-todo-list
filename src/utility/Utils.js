export function getDateKey(date) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = `${(month > 9 ? '' : '0')}${month}`;
  day = `${(day > 9 ? '' : '0')}${day}`;

  return `${year}-${month}-${day}`;
}
