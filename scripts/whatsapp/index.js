var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { messagePatterns } from "../patterns/index.js";
const exportedChats = [];
export const WhatsappContentReader = (file, os) => __awaiter(void 0, void 0, void 0, function* () {
    const fileStream = file.stream().getReader();
    const decoder = new TextDecoder();
    let partialLine = "";
    try {
        while (true) {
            const { done, value } = yield fileStream.read();
            if (done) {
                if (partialLine)
                    checkExportedChatsForWhatsapp(partialLine, os);
                break;
            }
            const chunk = decoder.decode(value, { stream: true });
            const lines = (partialLine + chunk).split(/\r\n|[\n\r\u2028\u2029]/g);
            // Save the last partial line and removed from current chunk to use it in next chunk
            partialLine = lines.pop();
            for (const line of lines) {
                checkExportedChatsForWhatsapp(line, os);
            }
        }
    }
    catch (error) {
        console.log("Error in file content reader, Error: ", error);
        console.log("more details:", file);
    }
    return exportedChats;
});
export const checkExportedChatsForWhatsapp = (line, os) => {
    if (messagePatterns.whatsapp.version[os].test(line)) {
        exportedChats.push(line);
    }
    else if (exportedChats.length > 0) {
        // if the current line belong to pervious line I combine these two.
        let lastMessage = exportedChats.pop();
        lastMessage += `\n\r ${line}`;
        exportedChats.push(lastMessage);
    }
};
