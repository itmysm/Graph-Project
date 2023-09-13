// these scripts get content of the file and covert them into a readable object
import {Analyzer } from '@/utils/analyze'
import { ReadFile } from '@/utils/general/readFile';

import { patterns } from "@/utils/general";
const readFile = new ReadFile
const analyzer = new Analyzer()

export function whatsapp(file) {
  readFile.lineByLine(file, convertToStandardFormatWhatsapp)
  return analyzer.done()
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