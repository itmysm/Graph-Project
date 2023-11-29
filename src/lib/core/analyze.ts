import { get } from "idb-keyval";
import { structures } from "@/types/core";

let messages: structures["message"]["whatsapp"][] | undefined = [];

export async function Analyzer() {
  const result = await get("exportedMessages");

  if (result === undefined) {
    window.alert("Error: in ExportMessagesFromEachLineOfData => OS has not been detected!");
    return;
  }

  messages = result;
  classificationByTime();
}

type ChartTypes = "twin" | "separate";

function classificationByTime() {
  messages.forEach((message) => {});
}

function generateDataChartsBasedOnTypeOfCharts(type: ChartTypes) {}
