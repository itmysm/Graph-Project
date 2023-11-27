export const detectApplication = (line: string, fileExtension = ""): string | null => {
  if (fileExtension === "txt") {
    return "whatsapp";
  } else {
    return null;
  }
};
