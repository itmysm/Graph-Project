/* This script guesses the name of the application
  by reading a few lines of the content of the uploaded file and matching it with the keys in detectKeys.
*/

import ReadFile from "../general/readFile"
import { detectKeys } from "../types/platforms"
const readFile = new ReadFile()

let typeOfData = undefined

export const checkStructure = async (file) => {
  await readFile.lineByLine(file, checkFirstLineOfData)

  console.log(typeOfData);
  return typeOfData
}

function checkFirstLineOfData(line) {
  if (line.includes(detectKeys.whatsapp)) {
    typeOfData = 'whatsapp'
    return true
  } else {
    typeOfData = null
    return true
  }
}
