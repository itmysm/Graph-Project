import { DefaultOperationSystems } from "./types/general.js";
import { whatsappConverter } from "./whatsapp/converter.js";
import { checkExportedChatsForWhatsapp, WhatsappContentReader } from "./whatsapp/index.js";

const fileInput: HTMLInputElement = document.querySelector("#fileInput") as HTMLInputElement;

const application = "whatsapp";
const os: DefaultOperationSystems = "IOS";

fileInput.addEventListener("change", async () => {
  if (fileInput.files && fileInput.files.length > 0) {
    if (application === "whatsapp") {
      const exportedChatFromFile: string[] = await WhatsappContentReader(fileInput.files[0], os);
      whatsappConverter(exportedChatFromFile);
    }
  }
});
