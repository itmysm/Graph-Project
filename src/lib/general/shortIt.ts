// a script for short long strings and these stuffs
import CryptoJS from "crypto-js"

import { extensionExporter } from "./extensionExporter";

export const shortText = (text: string, length = 10) => {
  return text.slice(0, length);
};

export const shortFileNameWithExtension = (text: string = "unknown", length = 24) => {
  const extension = extensionExporter(text);

  if (text.length + extension.length > length) {
    return text.slice(0, length) + "..." + extension;
  } else {
    return text;
  }
};

export const bytesToKb = (value: number = 1024): string => {
  return Math.floor(value / 1024) + "KB";
};

//create a random hash key
export const uniqueNameGenerator = (name: string): string => {
  const hash = CryptoJS.MD5(name).toString();
  return `p_${hash.substr(0, 8)}`;
};
