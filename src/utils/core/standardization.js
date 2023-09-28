// these scripts get content of the file and covert them into a readable object
import { Analyzer } from '@/utils/core/analyze'
import { ReadFile } from '@/utils/core/readFile.ts';
import { regexPatterns, makeValidNameProperty } from '@/utils/general';
import { getTimestampInfo, unixTimeToTimePeriods, whatsappDateToUnixTimestamp, convert12To24HourFormat, convertHandyTimeToAmPm } from "@/utils/tools";

const readFile = new ReadFile
const analyzer = new Analyzer()
let detectedOS = null

export function whatsapp(file, operationSystemThatChatExportedFrom) {
  console.log(operationSystemThatChatExportedFrom);
  detectedOS = operationSystemThatChatExportedFrom
  readFile.lineByLine(file, exportDifferentParts)
  return analyzer.done()
}

function exportDifferentParts(oneLineOfData) {
  const message = {}

  if (detectedOS === 'android') {
    message.owner = oneLineOfData.match(regexPatterns.name)?.[0] || 'unauthorized'
    message.date = oneLineOfData.match(regexPatterns.date)?.[0] || 'unauthorized'
    message.time = oneLineOfData.match(regexPatterns.time)?.[0] || 'unauthorized'
    message.content = oneLineOfData.match(regexPatterns.message)?.[1] || 'unauthorized'

  } else if (detectedOS === 'ios') {
    message.owner = oneLineOfData.match(regexPatterns.exportSenderInIosFormat)?.[0] || 'unauthorized'
    message.date = oneLineOfData.match(regexPatterns.date)?.[0] || 'unauthorized'
    message.time = oneLineOfData.match(regexPatterns.exportTimeInIosFormat)?.[0] || 'unauthorized'
    message.content = oneLineOfData.match(regexPatterns.exportMessageInIosFormat)?.[0] || 'unauthorized'
  }

  Object.values(message).forEach((value, index) => {
    if (value == 'unauthorized') message.type = 'unauthorized'
  })

  if (message.type == 'unauthorized') {
    analyzer.collectsErrors('unauthorized', oneLineOfData)
  } else {
    getRequireInfoFromMessage(message)
  }
}


async function getRequireInfoFromMessage(message) {
  const helpers = {}

  helpers.uniqKeyName = await makeValidNameProperty(message.owner)
  if (detectedOS === 'ios') {
    message.time = helpers.messageTime = await convertHandyTimeToAmPm(message.time)
  }
  helpers.messageTime = await convert12To24HourFormat(message.time)
  helpers.messageTimeStamp = await whatsappDateToUnixTimestamp(message.date)
  helpers.messageTimePeriods = await unixTimeToTimePeriods(helpers.messageTimeStamp)
  helpers.messageTimeInfo = await getTimestampInfo(helpers.messageTimeStamp)

  analyzer.start(message, helpers)
}