export const tempDataModel = {
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