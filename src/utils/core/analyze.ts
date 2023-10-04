import { tempDataModel } from "@/utils/constants";
import { MessageTimePeriodsType, MessageType, MessagesType } from "../types";
import { get, set } from "idb-keyval";

let dataModel = null;

export class Analyzer {
  async start() {
    try {
      dataModel = tempDataModel;
      const allMessages = await get("messages");
      const numberOfMessages = await this.messageCounter(allMessages);
      const messagesByPerson = await this.countMessagesByPerson(allMessages);

      set("results", { numberOfMessages: numberOfMessages, messagesByPerson: messagesByPerson});
    } catch (error) {
      console.error("Error In analyze.js while fetching data from IndexedDB in start() method:", error);
    }
  }

  async messageCounter(messages: MessagesType) {
    return new Promise((resolve) => {
      try {
        messages.forEach((message: MessageType) => {
          Object.values(message.messageTimePeriods).forEach((messagePeriod: MessageTimePeriodsType) => {
            const exactTime = message.messageInfo[messagePeriod.identifier];
            // init period if period does not exist in object
            if (dataModel.numberOfMessages.periods[messagePeriod.key] === undefined) {
              dataModel.numberOfMessages.periods[messagePeriod.key] = {
                [exactTime]: {
                  value: 1,
                  periodCategory: messagePeriod.key,
                  exactTime: exactTime,
                },
                sum: 1,
              };
            } else if (dataModel.numberOfMessages.periods[messagePeriod.key][exactTime] == undefined) {
              dataModel.numberOfMessages.periods[messagePeriod.key][exactTime] = {
                value: 1,
                periodCategory: messagePeriod.key,
                exactTime: exactTime,
              };

              dataModel.numberOfMessages.periods[messagePeriod.key].sum += 1;
            } else {
              dataModel.numberOfMessages.periods[messagePeriod.key][exactTime].value += 1;
              dataModel.numberOfMessages.periods[messagePeriod.key].sum += 1;
            }
          });

          dataModel.numberOfMessages.sum += 1;
        });

        resolve(dataModel.numberOfMessages);
      } catch (error) {
        console.log("Error in messageCounter method in analyze.ts file", error);
      }
    });
  }

  async countMessagesByPerson(messages: MessagesType) {
    try {
      return new Promise((resolve) => {
        messages.forEach((message: MessageType) => {
          Object.values(message.messageTimePeriods).forEach((messagePeriod: MessageTimePeriodsType) => {
            const exactTime = message.messageInfo[messagePeriod.identifier];
            if (dataModel.messagesByPerson[message.uniqKeyName] === undefined) {
              dataModel.messagesByPerson[message.uniqKeyName] = {
                displayName: message.owner,
                periods: {
                  [messagePeriod.key]: {
                    [exactTime]: {
                      value: 1,
                      periodCategory: messagePeriod.key,
                      exactTime: exactTime,
                    },
                    sum: 1,
                  },
                },

                sum: 1,
              };
            } else if (dataModel.messagesByPerson[message.uniqKeyName].periods[messagePeriod.key] === undefined) {
              dataModel.messagesByPerson[message.uniqKeyName].periods[messagePeriod.key] = {
                [exactTime]: {
                  value: 1,
                  periodCategory: messagePeriod.key,
                  exactTime: exactTime,
                },

                sum: 1,
              };

              dataModel.messagesByPerson[message.uniqKeyName].sum += 1;
            } else if (dataModel.messagesByPerson[message.uniqKeyName].periods[messagePeriod.key][exactTime]) {
              dataModel.messagesByPerson[message.uniqKeyName].periods[messagePeriod.key][exactTime] = {
                value: 1,
                periodCategory: messagePeriod.key,
                exactTime: exactTime,
              };

              dataModel.messagesByPerson[message.uniqKeyName].periods[messagePeriod.key].sum += 1;
              dataModel.messagesByPerson[message.uniqKeyName].sum += 1;
            } else {
              dataModel.messagesByPerson[message.uniqKeyName].periods[messagePeriod.key][exactTime].value += 1;

              dataModel.messagesByPerson[message.uniqKeyName].periods[messagePeriod.key].sum += 1;
              dataModel.messagesByPerson[message.uniqKeyName].sum += 1;
            }
          });
        });
        resolve(dataModel.messagesByPerson);
      });
    } catch (error) {
      console.log("Error in countMessagesByPerson method in analyze.ts file", error);
    }
    // const { messageTimePeriods, messageTimeInfo, uniqKeyName } = helpers;

    // Object.values(messageTimePeriods).map((period:) => {
    //   const exactTime = messageTimeInfo[period.identifier];

    //   if (dataModel.messagesByPerson[uniqKeyName] == undefined) {
    //     dataModel.messagesByPerson[uniqKeyName] = {
    //       name: message.owner,
    //       periods: {
    //         [period.key]: {
    //           [exactTime]: {
    //             value: 1,
    //             name: period.key,
    //           },
    //         },
    //       },
    //     };
    //   } else if (dataModel.messagesByPerson[uniqKeyName]["periods"][period.key] == undefined) {
    //     dataModel.messagesByPerson[uniqKeyName]["periods"][period.key] = {
    //       [exactTime]: {
    //         value: 1,
    //         name: exactTime,
    //       },
    //     };
    //   } else if (dataModel.messagesByPerson[uniqKeyName]["periods"][period.key][exactTime] === undefined) {
    //     dataModel.messagesByPerson[uniqKeyName]["periods"][period.key][exactTime] = {
    //       value: 1,
    //       key: exactTime,
    //     };
    //   } else {
    //     dataModel.messagesByPerson[uniqKeyName]["periods"][period.key][exactTime].value += 1;
    //   }
    // });

    messages.forEach((message: MessageType) => {
      // if(dataModel.messagesByPerson[message.uniqName] === undefined) {
      //   Object.values(message.messageTimePeriods)
      //   dataModel.messagesByPerson[message.uniqName] = {
      //     periods: {},
      //     sum: 1
      //   }
      // }
    });
  }

  collectsErrors(error, data) {
    // dataModel.log.push({ error: error, data: data });
  }

  done() {
    return dataModel;
  }
}
