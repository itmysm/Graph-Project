// these scripts get content of the file and covert them into a readable object

import Analyzer from "../analyze";
import { patterns } from "../general";
import ReadFile from "./readFile";

const readFile = new ReadFile()
const analyzer = new Analyzer()

export function whatsapp(file) {
  readFile.lineByLine(file, convertToStandardFormatWhatsapp)
}

function convertToStandardFormatWhatsapp(oneLineOfData) {
  const message = {
    date: oneLineOfData.match(patterns.date)?.[0] || "0/0/00",
    time: oneLineOfData.match(patterns.time)?.[0] || "25:00",
    owner: oneLineOfData.match(patterns.name)?.[0] || 'null',
    content: oneLineOfData.match(patterns.message)?.[1] || 'null',
    logger: oneLineOfData
  }
  analyzer.messageCounter(message)
}