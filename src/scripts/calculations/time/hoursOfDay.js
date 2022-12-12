const hours = {}

function whichHoursOfDay (data) {
  for (let index = 1; index <= 24; index++) hours[index] = 0 // create 1 to 24 in hours
  console.log(hours)
  const app = JSON.parse(localStorage.getItem('temporaryInfoFile'))
  if (app.application === 'telegram') {
    unixTimeTransition(data, 'date_unixtime')
  } else if (app.application === 'whatsapp') {
    convertTime12To24(data, 'time')
  } else if (app.application === 'instagram') {
    unixTimeTransition(data, 'time')
  }

  return hours
}

function unixTimeTransition (data, keyTime) {
  data.messages.forEach(msg => {
    const date = new Date(msg[keyTime] * 1000)
    const hour = date.getHours()

    hours['' + hour] += 1
  })
}

function convertTime12To24 (data, keyTime) {
  data.messages.forEach(msg => {
    if (msg[keyTime]) {
      const time = msg[keyTime]
      let hour = +time.match(/^(\d+)/)[1] // => show hour ex: 12

      // eslint-disable-next-line prefer-const
      let AM_OR_PM = time.match(/\s(.*)$/)[1] // => PM || AM

      if (AM_OR_PM === 'PM' && hour < 12) hour = hour + 12
      if (AM_OR_PM === 'AM' && hour === 12) hour = hour + 12
      hours['' + hour] += 1
    }
  })
}

export { whichHoursOfDay }
