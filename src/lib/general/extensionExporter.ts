export const extensionExporter = (text: string) => {
  return text.includes(".") ? text.split("").reverse().join("").split(".")[0].split("").reverse().join("") : "";
};
