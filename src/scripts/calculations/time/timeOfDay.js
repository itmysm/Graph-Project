let times = {}

function whichTimeOfDay (data) {
  times = { morning: 0, afternoon: 0, evening: 0, night: 0 }
  // 06 - 12 morning | 12-18 afternoon | 18 - 21 evening | 21 - 06 night

  const app = JSON.parse(localStorage.getItem('temporaryInfoFile'))
  if (app.application === 'telegram') {
    unixTimeTransition(data, 'date_unixtime')
  } else if (app.application === 'whatsapp') {
    convertTime12To24(data, 'time')
  } else if (app.application === 'instagram') {
    unixTimeTransition(data, 'time')
  }
  return times
}

function unixTimeTransition (data, keyTime) {
  data.messages.forEach(msg => {
    const date = new Date(msg[keyTime] * 1000)
    const hours = date.getHours()

    detectTime(+hours)
  })
}

function detectTime (time) {
  if (time >= 6 && time < 12) times.morning += 1
  else if (time >= 12 && time < 18) times.afternoon += 1
  else if (time >= 18 && time < 21) times.evening += 1
  else if (time >= 21 && time < 6) times.night += 1
}

function convertTime12To24 (data, keyTime) {
  data.messages.forEach(msg => {
    if (msg[keyTime]) {
      const time = msg[keyTime]
      let hours = Number(time.match(/^(\d+)/)[1])
      const AMPM = time.match(/\s(.*)$/)[1]
      if (AMPM === 'PM' && hours < 12) hours = hours + 12
      if (AMPM === 'AM' && hours === 12) hours = hours - 12
      let sHours = hours.toString()
      if (hours < 10) sHours = '0' + sHours

      detectTime(sHours)
    }
  })
}

export { whichTimeOfDay }
