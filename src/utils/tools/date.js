import { timeConstants } from "../constants";

export const convert12To24HourFormat = (timeString = '00:00 AM') => {
  return new Promise((resolve) => {
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

    resolve(`${hoursFormatted}:${minutesFormatted}`)
  })
};

export const whatsappDateToUnixTimestamp = (whatsappDate, time = '00:00') => {
  return new Promise((resolve) => {
    const [month, day, year] = whatsappDate.split('/').map(Number);
    const adjustedYear = year < 70 ? 2000 + year : 1900 + year;

    const [hours, minutes] = time.split(':').map(Number);

    const date = new Date(adjustedYear, month - 1, day, hours, minutes);
    const unixTimestamp = date.getTime();
    resolve(Math.floor(unixTimestamp / 1000))
  })
};

export const getTimestampInfo = async (unixTimestamp) => {
  return new Promise((resolve) => {
    const date = new Date(unixTimestamp * 1000);

    const hours = (date.getHours() % 12 || 12).toString().padStart(2, '0');
    const amPm = date.getHours() < 12 ? 'am' : 'pm';

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()].toLowerCase();

    const day = date.getDate().toString()
    const month = date.toLocaleString('default', { month: 'long' }).toLowerCase();
    const year = date.getFullYear().toString().toLowerCase();

    const timestampInfo = {
      hoursOfDay: `${hours}${amPm}`,
      daysOfWeek: dayOfWeek,
      daysOfMonth: timeConstants['month'][day].name,
      monthsOfSixMonth: month,
      monthsOfYear: month,
      year: year
    };

    resolve(timestampInfo)
  })
}

export const unixTimeToTimePeriods = async (unixTimestamp) => {
  return new Promise((resolve) => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const timeDifference = currentTimestamp - unixTimestamp;
    const daysAgo = Math.floor(timeDifference / 86400);
    const periods = []

    if (daysAgo == 0 || daysAgo == 1) {
      periods.push({ key: 'day', identifier: 'hoursOfDay' })
    }

    if (daysAgo >= 0 && daysAgo <= 7) {
      periods.push({ key: 'week', identifier: 'daysOfWeek' })
    }

    if (daysAgo >= 0 && daysAgo <= 31) {
      periods.push({ key: 'month', identifier: 'daysOfMonth' })
    }

    if (daysAgo >= 0 && daysAgo <= 186) {
      periods.push({ key: 'sixMonth', identifier: 'monthsOfSixMonth' })
    }

    if (daysAgo >= 0 && daysAgo <= 365) {
      periods.push({ key: 'year', identifier: 'monthsOfYear' })
    }

    resolve(periods)
  })
}

export const convertHandyTimeToAmPm = (time) => {
  return new Promise((resolve) => {
    const [digitTime, period] = time.split(' in the ')

    const [hour, minute] = digitTime.split(":")
    const amPm = () => {
      switch (period) {
        case 'morning':
          return 'AM'
          break;

        case 'afternoon':
          return 'PM'
          break;
        case 'afternoon':
          return 'PM'
          break;
        default:
          return 'AM'
          break;
      }
    }

    resolve(`${hour}:${minute} ${amPm()}`)
  })
}

export const genTimeStamp = () => {
  return new Date().getTime()
}
