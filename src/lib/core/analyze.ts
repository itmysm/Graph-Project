import { get, set } from "idb-keyval";
import { MessagesStructure } from "@/types/core";
import moment from "moment";
import { devLogger } from "../dev";
import { uniqueNameGenerator } from "../general";

let messages: MessagesStructure[] | undefined = [];
export async function Analyzer() {
  const result = await get("exportedMessages");

  if (result === undefined) {
    window.alert("Error: in ExportMessagesFromEachLineOfData => OS has not been detected!");
    return;
  }

  messages = result;
  await classificationByTime();
}

type ChartTypes = "twin" | "separate";

async function classificationByTime() {
  messages?.forEach((msg, index) => {
    makeUniqueName(msg);
    const momentObj = moment.unix(msg.unixTime);
    const passedDays = moment().diff(momentObj, "days");

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
    } else {
      messages?.splice(index, 1);
      devLogger(`Item number ${index} has been deleted from the list in classificationByTime section`, "warning", true);
    }
  });

  await set("exportedMessages", messages);
}

function makeUniqueName(msg: MessagesStructure) {
  const keyName = uniqueNameGenerator(msg.sender);
  msg.uniqueName = { [keyName]: msg.sender };
}

function generateDataChartsBasedOnTypeOfCharts(type: ChartTypes) {}
