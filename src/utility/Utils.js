export function getDateKey(date) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = `${(month > 9 ? '' : '0')}${month}`;
  day = `${(day > 9 ? '' : '0')}${day}`;

  return `${year}-${month}-${day}`;
}

export function getOrdinalSup(n) {
  return (
    n > 0
    ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
    : ''
  );
}
