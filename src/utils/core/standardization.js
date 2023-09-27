// these scripts get content of the file and covert them into a readable object
import { Analyzer } from '@/utils/core/analyze'
import { ReadFile } from '@/utils/core/readFile.ts';
import { regexPatterns } from '@/utils/general';

const readFile = new ReadFile
const analyzer = new Analyzer()

export function whatsapp(file) {
  readFile.lineByLine(file, convertToStandardFormatWhatsapp)
  return analyzer.done()
}

function convertToStandardFormatWhatsapp(oneLineOfData) {
  const message = {
    date: oneLineOfData.match(regexPatterns.date)?.[0] || "unauthorized",
    time: oneLineOfData.match(regexPatterns.time)?.[0] || "unauthorized",
    owner: oneLineOfData.match(regexPatterns.name)?.[0] || 'unauthorized',
    content: oneLineOfData.match(regexPatterns.message)?.[1] || 'unauthorized',
    log: oneLineOfData,
    type: undefined
  }

  Object.values(message).forEach((value, index) => {
    if (value == 'unauthorized') message.type = 'unauthorized'
    if (Object.values(message).length - 1 == index) {
      if (message.type !== 'unauthorized') {
        analyzer.start(message)
      } else {
        analyzer.collectsErrors('unauthorized', oneLineOfData)
      }
    }
  })
}