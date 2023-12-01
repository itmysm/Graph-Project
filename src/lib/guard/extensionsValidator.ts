import { extensionExporter } from "@/lib/general";


type ExtensionsValidator = (fileName: string, allowTypes?: string[]) => boolean;

const defaultExtension = ["htm", "html", "json", "txt"];
export default function extensionsValidator(fileName: string, allowTypes: string[] = defaultExtension): boolean {
  const extension = extensionExporter(fileName);
  let status = false;

  allowTypes.forEach((type) => {
    if (type === extension) {
      status = true;
    }
  });

  return status;
}
