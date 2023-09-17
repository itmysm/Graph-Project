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

export const whatsappDateToUnixTimestamp = (whatsappDate) => {
  const [month, day, year] = whatsappDate.split('/').map(Number);
  const adjustedYear = year < 70 ? 2000 + year : 1900 + year;
  const date = new Date(adjustedYear, month - 1, day);
  const unixTimestamp = date.getTime();
  return Math.floor(unixTimestamp / 1000);
}

export const getTimestampInfo = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);

  const hours = date.getHours() % 12 || 12;
  const amPm = date.getHours() < 12 ? 'am' : 'pm';

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[date.getDay()];

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const timestampInfo = {
    hours: `${amPm}${hours}`,
    dayOfWeek: dayOfWeek,
    day: day,
    month: month,
    year: year
  };

  return timestampInfo;
}

export const unixTimeToDays = (unixTimestamp) => {
  const defaultPeriods = { all: true }
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const timeDifference = currentTimestamp - unixTimestamp;

  const daysAgo = Math.floor(timeDifference / 86400);

  if (daysAgo == 1) {
    defaultPeriods.day = true
  }

  if (daysAgo >= 0 && daysAgo <= 7) {
    defaultPeriods.week = true
  }

  if (daysAgo >= 0 && daysAgo <= 31) {
    defaultPeriods.month = true
  }

  if (daysAgo >= 0 && daysAgo <= 186) {
    defaultPeriods.sixMonth = true
  }

  if (daysAgo >= 0 && daysAgo <= 365) {
    defaultPeriods.year = true
  }
  return defaultPeriods
}
