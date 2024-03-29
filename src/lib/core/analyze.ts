import { get, set } from "idb-keyval";
import { ExportedDataFromChat, MessagesStructure } from "@/types/core";
import moment from "moment";
import { devLogger } from "../dev";
import { uniqueNameGenerator } from "../general";

let exportedMessagesFromIndexDB: ExportedDataFromChat;
const allParticipationInChat = {};
async function classificationByTime() {
  exportedMessagesFromIndexDB.messages?.forEach((msg: MessagesStructure, index) => {
    const uniqueName = makeUniqueName(msg);
    const uniqueNameHashKey = Object.keys(uniqueName)[0];
    if (!allParticipationInChat[uniqueNameHashKey]) {
      allParticipationInChat[uniqueNameHashKey] = uniqueName[uniqueNameHashKey];
    }

    msg.uniqueName = uniqueName;
    console.log(msg.unixTime[exportedMessagesFromIndexDB.dateFormat]);

    const momentObj = moment.unix(msg.unixTime[exportedMessagesFromIndexDB.dateFormat]);
    const passedDays = moment().diff(momentObj, "days");
    if (passedDays >= 0) {
      if (passedDays <= 365 && passedDays >= 0) {
        msg.periods.push("year");

        if (passedDays <= 120) {
          msg.periods.push("sixMonth");

          if (passedDays <= 31) {
            msg.periods.push("month");

            if (passedDays <= 7) {
              msg.periods.push("week");

              if (passedDays == 0) {
                msg.periods.push("24h");
              }
            }
          }
        }
      }
    } else {
      exportedMessagesFromIndexDB.messages?.splice(index, 1);
      devLogger(`Item number ${index} has been deleted from the list in classificationByTime section`, "warning", true);
    }
  });

  await set("result", exportedMessagesFromIndexDB);
  await set("allParticipationInChat", allParticipationInChat);
}

function makeUniqueName(msg: MessagesStructure) {
  if (msg.sender === "unauthorized") {
    return { ["unauthorized"]: msg.sender };
  } else {
    const keyName = uniqueNameGenerator(msg.sender);
    return { [keyName]: msg.sender };
  }
}

export async function Analyzer() {
  exportedMessagesFromIndexDB = await get("exportedMessages");

  if (exportedMessagesFromIndexDB) {
    await classificationByTime();
  } else {
    window.alert("Error: in ExportMessagesFromEachLineOfData => OS has not been detected!");
    return;
  }
}
