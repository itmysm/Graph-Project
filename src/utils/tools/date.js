export const convertTo24HourFormat = (timeString) => {
  const [time, period] = timeString.split(/\s+/);
  const [hours, minutes] = time.split(':');

  let hours24 = parseInt(hours, 10);

  if (period === 'PM' && hours24 !== 12) {
    hours24 += 12;
  } else if (period === 'AM' && hours24 === 12) {
    hours24 = 0;
  }

  const hoursFormatted = hours24.toString().padStart(2, '0');
  const minutesFormatted = minutes.padStart(2, '0');

  return `${hoursFormatted}:${minutesFormatted}`;
}

export const convertDateToUnixTime = (dateString) => {
  const [month, day, year] = dateString.split('/');
  const adjustedYear = parseInt(year, 10) + 2000; // Assuming 2-digit year is in the 21st century (20xx)
  const dateObject = new Date(adjustedYear, parseInt(month, 10) - 1, day); // Months in Date object are 0-indexed

  // Convert to Unix time
  const unixTime = dateObject.getTime() / 1000;
  return unixTime;
}

