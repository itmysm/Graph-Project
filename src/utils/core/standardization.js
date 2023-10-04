// these scripts get content of the file and covert them into a readable object
import { Analyzer } from './analyze.ts';
import { ReadFile } from '@/utils/core/readFile.ts';
import { regexPatterns, makeValidNameProperty } from '@/utils/general';
import { getTimestampInfo, unixTimeToTimePeriods, whatsappDateToUnixTimestamp, convert12To24HourFormat, convertHandyTimeToAmPm } from "@/utils/tools";
import { set } from 'idb-keyval';

const readFile = new ReadFile
const analyzer = new Analyzer()
let detectedOS = null
let messages = null


export async function whatsapp(file, operationSystemThatChatExportedFrom) {
  messages = []
  // exported data from android and ios have some different! So I here get the name of OS that data exported from! 
  detectedOS = operationSystemThatChatExportedFrom

  // export each line and calling exportPartsFromLine method to convert the data to object
  await readFile.lineByLine(file, exportPartsFromLine)

  // set all converted messages to indexDB and start analyzer method to start analyzing data
  set('messages', messages)
  analyzer.start()
  
}

function exportPartsFromLine(oneLineOfData) {
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

  // push message messages array
  messages.push({ ...message, timeStamp: helpers.messageTimeStamp, messageTimePeriods: helpers.messageTimePeriods, messageInfo: helpers.messageTimeInfo, uniqKeyName: helpers.uniqKeyName })
}