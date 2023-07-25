const { makeValidNameProperty } = require("../general")
import { patterns } from "../general";

const dataModel = {
  info: {
    dateOfTheFirstMessage: null,
    dateOfTheLastMessage: null,
    numberOfDays: 0,
    firstMessage: null,
    numberOfMessages: 0
  },
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

class Analyzer {
  constructor() {
    this.data = dataModel
  }

  messageCounter(message) {
    if (this.data.info.numberOfMessages == 0) {
      this.data.info.firstMessage = message.content
      this.data.info.dateOfTheFirstMessage = message.date
    }

    if (message.owner.match(patterns.objectProperty) == null) {
      const standardName = makeValidNameProperty(message.owner)
      this.countMessageByPerson(message, standardName)
    } else {
      this.countMessageByPerson(message, message.owner)
    }

    this.data.info.numberOfMessages += 1
  }

  countMessageByPerson(message, prop) {
    if(message.owner == 'null') {
      // this.data.systemMessage.push(message)
      this.data.log.push(message)
    } else if (this.data.messagesByPerson[prop]) {
      this.data.messagesByPerson[prop].count += 1
    } else {
      this.data.messagesByPerson[prop] = {
        displayName: message.owner,
        count: 0
      }
    }

    console.log(this.data);
  }
}

export default Analyzer;