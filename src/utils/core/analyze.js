const { makeValidNameProperty, patterns } = require("@/utils/general")
import { getTimestampInfo, unixTimeToTimePeriods, whatsappDateToUnixTimestamp, convert12To24HourFormat } from "@/utils/tools";
import { tempDataModel, periodTypes } from "@/utils/constants";

const dataModel = tempDataModel

export class Analyzer {
  async start(message, helpers) {
    console.log(message, helpers);
    this.messageCounter(message, helpers)
  }

  messageCounter(message, helpers) {
    const { messageTimePeriods, messageTimeInfo } = helpers;

    messageTimePeriods.forEach((period) => {
      const exactTime = messageTimeInfo[period.identifier];

      if (!dataModel.numberOfMessages[period.key]) {
        dataModel.numberOfMessages[period.key] = {};
      }

      if (!dataModel.numberOfMessages[period.key][exactTime]) {
        dataModel.numberOfMessages[period.key][exactTime] = {
          value: 1,
          name: exactTime,
        };
      } else {
        dataModel.numberOfMessages[period.key][exactTime].value += 1;
      }
    });

    this.countMessagesByPerson(message, helpers)
  }

  countMessagesByPerson(message, helpers) {
    const { messageTimePeriods, messageTimeInfo, uniqKeyName } = helpers;


    Object.values(messageTimePeriods).map((period) => {
      const exactTime = messageTimeInfo[period.identifier]

      if (dataModel.messagesByPerson[uniqKeyName] == undefined) {
        dataModel.messagesByPerson[uniqKeyName] = {
          name: message.owner,
          periods: {
            [period.key]: {
              [exactTime]: {
                value: 1,
                name: period.key
              }
            }
          }
        }
      } else if (dataModel.messagesByPerson[uniqKeyName]['periods'][period.key] == undefined) {
        dataModel.messagesByPerson[uniqKeyName]['periods'][period.key] = {
          [exactTime]: {
            value: 1,
            name: exactTime
          }
        }
      } else if (dataModel.messagesByPerson[uniqKeyName]['periods'][period.key][exactTime] === undefined) {
        dataModel.messagesByPerson[uniqKeyName]['periods'][period.key][exactTime] = {
          value: 1,
          key: exactTime
        }
      } else {
        dataModel.messagesByPerson[uniqKeyName]['periods'][period.key][exactTime].value += 1
      }
    });
  }


  collectsErrors(error, data) {
    dataModel.log.push({ error: error, data: data })
  }

  done() {
    return dataModel
  }
}