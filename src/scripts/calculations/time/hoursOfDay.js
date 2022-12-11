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
    const time = msg[keyTime]
    let sHours = Number(time.match(/^(\d+)/)[1])
    const AMPM = time.match(/\s(.*)$/)[1]
    if (AMPM === 'PM' && sHours < 12) sHours = sHours + 12
    if (AMPM === 'AM' && sHours === 12) sHours = sHours - 12
    const mHours = sHours.toString()

    hours['' + mHours] += 1
  })
}

export { whichHoursOfDay }
