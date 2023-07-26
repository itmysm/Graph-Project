/* This script guesses the name of the application
  by reading a few lines of the content of the uploaded file and matching it with the keys in detectKeys.
*/

import ReadFile from "../general/readFile"
import { detectKeys } from "../types/platforms"
const readFile = new ReadFile()

let typeOfData = null
let limitLineRead = 0

export const checkStructure = async (file) => {
  await readFile.lineByLine(file, checkFirstLineOfData)
  limitLineRead += 1
  
  if (typeOfData) {
    console.log(typeOfData);
    return typeOfData
  } else if (limitLineRead > 70) {
    return typeOfData
  }
}

function checkFirstLineOfData(line) {
  if (line.includes(detectKeys.whatsapp)) {
    typeOfData = 'whatsapp'
    return true
  } else if (line.search(detectKeys.telegram)) {
    typeOfData = 'telegram'
    return true
  }
}
