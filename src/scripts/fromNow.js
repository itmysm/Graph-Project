const date = new Date()
const dateNow = date.getTime()

// this function work like fromNow() method in moment.js library
const MS_SECOND = 1000
const MS_MINUTE = (MS_SECOND * 60)
const MS_HOUR = (MS_MINUTE * 60)
const MS_DAY = (MS_HOUR * 24)
const MS_MONTH = (MS_DAY * 30)
const MS_YEAR = (MS_DAY * 365)

const FROM_NOW_JUST_NOW = (MS_SECOND * 44)
const FROM_NOW_MINUTE = (MS_SECOND * 89)
const FROM_NOW_MINUTES = (MS_MINUTE * 44)
const FROM_NOW_HOUR = (MS_MINUTE * 89)
const FROM_NOW_HOURS = (MS_HOUR * 21)
const FROM_NOW_DAY = (MS_HOUR * 35)
const FROM_NOW_DAYS = (MS_DAY * 25)
const FROM_NOW_MONTH = (MS_DAY * 45)
const FROM_NOW_MONTHS = (MS_DAY * 319)
const FROM_NOW_YEAR = (MS_DAY * 547)

function fromNow (dateInput) {
  const timeStampDateInput = new Date(dateInput).getTime()
  const delta = dateNow - timeStampDateInput
  if (timeStampDateInput > dateNow) {
    return ('this is in the future')
  } else if (delta <= FROM_NOW_JUST_NOW) {
    return ('secondsAgo')
  } else if (delta <= FROM_NOW_MINUTE) {
    return ('minutesAgo')
  } else if (delta <= FROM_NOW_MINUTES) {
    return (Math.ceil(delta / MS_MINUTE) + ' minutesAgo')
  } else if (delta <= FROM_NOW_HOUR) {
    return ('hoursAgo')
  } else if (delta <= FROM_NOW_HOURS) {
    return (Math.ceil(delta / MS_HOUR) + ' dateHours')
  } else if (delta <= FROM_NOW_DAY) {
    return ('daysAgo')
  } else if (delta <= FROM_NOW_DAYS) {
    return (Math.ceil(delta / MS_DAY) + ' daysAgo')
  } else if (delta <= FROM_NOW_MONTH) {
    return ('monthsAgo')
  } else if (delta <= FROM_NOW_MONTHS) {
    return (Math.ceil(delta / MS_MONTH) + ' monthsAgo')
  } else if (delta <= FROM_NOW_YEAR) {
    return ('yearsAgo')
  } else {
    return (Math.ceil(delta / MS_YEAR) + ' yearsAgo')
  }
}

export { fromNow }
