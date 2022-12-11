const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const months = reactive({})
const trash = []

function getDates (data) {
  const app = JSON.parse(localStorage.getItem('temporaryInfoFile')).application

  putMonthNamesInMonthsObj() // put monthNames in month
  data.messages.forEach(msg => {
    if (app === 'instagram') {
      convertUnixToMonth(msg.date) === 'undefined' ? trash.push(msg.date) : months[convertUnixToMonth(msg.date)] += 1
    } else if (app === 'telegram') {
      convertUnixToMonth(msg.date_unixtime) === 'undefined' ? trash.push(msg.date_unixtime) : months[convertUnixToMonth(msg.date_unixtime)] += 1
    } else if (app === 'whatsapp') {
      dateToMonth(msg.date) === 'undefined' ? trash.push(msg.date) : months[dateToMonth(msg.date)] += 1
    }
  })

  return months
}

function convertUnixToMonth (dateMsg) {
  if (dateMsg === undefined) return undefined
  else {
    const unix = dateMsg * 1000
    let month = new Date(unix).toLocaleDateString()
    month = new Date(month).getMonth()
    return monthNames[month]
  }
}

function dateToMonth (dateMsg) {
  if (dateMsg === undefined) return undefined
  else {
    const month = new Date(dateMsg).getMonth()
    return monthNames[month]
  }
}

function putMonthNamesInMonthsObj () {
  monthNames.forEach(month => {
    months[month] = 0
  })
}

export { getDates }
