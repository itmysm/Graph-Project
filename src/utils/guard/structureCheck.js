/* This script guesses the name of the application
  by reading a few lines of the content of the uploaded file and matching it with the keys in detectKeys.
*/

import ReadFile from "../general/readFile"
import { detectKeys } from "../types/platforms"
const readFile = new ReadFile()

let typeOfData = null
let limitLineRead = 0

export const checkStructure = async (file) => {
  limitLineRead = 0
  await readFile.lineByLine(file, checkFirstLineOfData)
  return typeOfData
}

function checkFirstLineOfData(line) {
  if (limitLineRead > 20) {
    typeOfData = null
    return true
  }

  if (line.includes(detectKeys.whatsapp)) {
    typeOfData = 'whatsapp'
    return true
  }
  //  else if (line.includes(detectKeys.telegram)) {
  //   typeOfData = 'telegram'
  //   return true
  // }

  limitLineRead += 1
}
