/* This script guesses the name of the application
  by reading a few lines of the content of the uploaded file and matching it with the keys in messengerRecognitionKeys.
*/

import { ReadFile } from '@/utils/core/readFile'
import { messengerRecognitionKeys } from "@/utils/constants"
const readFile = new ReadFile

let typeOfData;
let limitLineRead = 0

export const checkStructure = async (file) => {
  limitLineRead = 0
  typeOfData = null
  await readFile.lineByLine(file, checkFirstLineOfData)
  return typeOfData
}

function checkFirstLineOfData(line) {

  if (limitLineRead > 20) {
    typeOfData = null
    return true
  }

  if (line.includes(messengerRecognitionKeys.whatsapp)) {
    typeOfData = 'whatsapp'
    return true
  }
  limitLineRead += 1
}
