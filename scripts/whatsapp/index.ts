import { messagePatterns } from "../patterns/index.js";
import { DefaultOperationSystems } from "../types/general.js";

const exportedChats: string[] = [];

export const WhatsappContentReader = async (file: Blob, os: DefaultOperationSystems): Promise<string[]> => {
  const fileStream = file.stream().getReader();
  const decoder = new TextDecoder();

  let partialLine: string | undefined = "";

  try {
    while (true) {
      const { done, value } = await fileStream.read();

      if (done) {
        if (partialLine) checkExportedChatsForWhatsapp(partialLine, os);
        break;
      }

      const chunk = decoder.decode(value, { stream: true });
      const lines: string[] = (partialLine + chunk).split(/\r\n|[\n\r\u2028\u2029]/g);

      // Save the last partial line and removed from current chunk to use it in next chunk
      partialLine = lines.pop();

      for (const line of lines) {
        checkExportedChatsForWhatsapp(line, os);
      }
    }
  } catch (error) {
    console.log("Error in file content reader, Error: ", error);
    console.log("more details:", file);
  }

  return exportedChats;
};

export const checkExportedChatsForWhatsapp = (line: string, os: DefaultOperationSystems): void => {
  if (messagePatterns.whatsapp.version[os].test(line)) {
    exportedChats.push(line);
  } else if (exportedChats.length > 0) {
    // if the current line belong to pervious line I combine these two.
    let lastMessage: string = exportedChats.pop()!;
    lastMessage += `\n\r ${line}`;
    exportedChats.push(lastMessage);
  }
};
