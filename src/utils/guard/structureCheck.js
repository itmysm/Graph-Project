import ReadFile from "../general/readFile"
const readFile = new ReadFile()
const detectKeys = {
  wa: 'Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.'
}

let typeOfData = undefined

export const checkStructure = async (file) => {
  await readFile.lineByLine(file, checkFirstLineOfData)

  console.log(typeOfData);
  return typeOfData
}

function checkFirstLineOfData (line) {
  if (line.includes(detectKeys.wa)) {
    typeOfData = 'whatsapp'
    return true
  } else {
    return true
  }
}
