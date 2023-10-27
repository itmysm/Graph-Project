var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { whatsappConverter } from "./whatsapp/converter.js";
import { WhatsappContentReader } from "./whatsapp/index.js";
const fileInput = document.querySelector("#fileInput");
const application = "whatsapp";
const os = "IOS";
fileInput.addEventListener("change", () => __awaiter(void 0, void 0, void 0, function* () {
    if (fileInput.files && fileInput.files.length > 0) {
        if (application === "whatsapp") {
            const exportedChatFromFile = yield WhatsappContentReader(fileInput.files[0], os);
            whatsappConverter(exportedChatFromFile);
        }
    }
}));
