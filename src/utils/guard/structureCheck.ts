/* This script guesses the name of the application
  by reading a few lines of the content of the uploaded file and matching it with the keys in messengerRecognitionKeys.
*/

import { ReadFile } from "@/utils/core/readFile";
import { messengerRecognitionKeys } from "@/utils/constants";
import { regexPatterns } from "../general";
import { ApplicationType } from "../types";
const readFile = new ReadFile();

let applicationType: ApplicationType = {
  app: null,
  os: null,
};

let maxTriesToDetectApplicationType = 20;
let numberOfTries = 0;

export const checkStructure = async (file) => {
  resetFunction();
  await readFile.lineByLine(file, checkFewLinesOfDataToDetectApplication);
  return applicationType;
};

function checkFewLinesOfDataToDetectApplication(line: String) {
  if (numberOfTries > maxTriesToDetectApplicationType) return true;

  if (
    !applicationType.app &&
    line.includes(messengerRecognitionKeys.whatsapp)
  ) {
    applicationType.app = "whatsapp";
  }

  if (applicationType.app == "whatsapp") {
    whatsappVersionDetector(line);
  }

  numberOfTries += 1;
}

function whatsappVersionDetector(line: String) {
  // We need to distinguish which OS (Android or OS) the uploaded chats belong to.
  if (line.search(regexPatterns.whatsappIOSVersion) >= 0) {
    applicationType.os = "ios";
  } else if (line.search(regexPatterns.whatsappAndroidVersion) >= 0) {
    applicationType.os = "android";
  }
}

function resetFunction() {
  numberOfTries = 0;

  applicationType = {
    app: null,
    os: null,
  };
}
