import { unixTimeToDays, whatsappDateToUnixTimestamp } from "@/utils/tools";
const { makeValidNameProperty, patterns } = require("@/utils/general")

const dataModel = {
  info: {
    dateOfTheFirstMessage: null,
    dateOfTheLastMessage: null,
    numberOfDays: 0,
    firstMessage: null,
  },
  numberOfMessages: {},
  messagesByPerson: {},
  messagesInDayCycle: {
    morning: 0,
    afternoon: 0,
    evening: 0,
    night: 0,
    midnight: 0
  },
  longestTalkTime: {
    messages: 0,
    time: { second: 0, minutes: 0, hours: 0, days: 0, weeks: 0, months: 0 },
    persons: {}
  },
  averageMessage: {
    second: 0,
    minute: 0,
    hour: 0,
    day: 0,
    week: 0,
    month: 0
  },
  systemMessage: [],
  log: []
}

export class Analyzer {
  constructor() {
    this.data = dataModel
  }

  start(msg) {
    this.msgCounter(msg)
  }

  msgCounter(msg) {
    // Here I am checking wh ether I can use the user's original name as the object key name or should I create a random name for this user.
    const standardName = makeValidNameProperty(msg.owner)

    const timestamp = whatsappDateToUnixTimestamp(msg.date)
    const periodKey = unixTimeToDays(timestamp)
    // console.log(unixTimeToDays(timestamp));

    Object.keys(periodKey).map((key) => {
      if (this.data.numberOfMessages[key] !== undefined) {
        this.data.numberOfMessages[key]++
      } else {
        this.data.numberOfMessages[key] = 1
      }
    })

    this.countMsgByPerson(msg, standardName)
  }

  countMsgByPerson(msg, keyName) {
    if (this.data.messagesByPerson[keyName] !== undefined) {
      this.data.messagesByPerson[keyName].value += 1
    } else {
      this.data.messagesByPerson[keyName] = {
        name: msg.owner,
        value: 1
      }
    }
  }

  collectsErrors(error, data) {
    this.data.log.push({ error: error, data: data })
  }

  done() {
    return this.data
  }
}