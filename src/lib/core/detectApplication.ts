import { Application, WhatsappOS } from "@/types/core";
import { whatsappRegexPatterns } from "../patterns";

const application: Application = { os: null, app: null };

export const detectApplication = (line: string, fileExtension: string): Application | null => {
  if (fileExtension === "txt") {
    detectWhatsappDataBelongsToWhichOS(line);
    application.app = "whatsapp";
    return application;
  } else {
    return null;
  }
};

function detectWhatsappDataBelongsToWhichOS(line: string) {
  console.log(
    line,
    line.search(whatsappRegexPatterns.whatsappIOSVersion) >= 0,
    line.search(whatsappRegexPatterns.whatsappAndroidVersion) >= 0
  );

  if (line.search(whatsappRegexPatterns.whatsappIOSVersion) >= 0) {
    application.os = "ios";
  } else if (line.search(whatsappRegexPatterns.whatsappAndroidVersion) >= 0) {
    application.os = "android";
  }
}
