// a script for short long strings and these stuffs
// import CryptoJS from "crypto-js"

import { extensionExporter } from "./extensionExporter"

export const shortText = (text: string, length = 10) => {
  return text.slice(0, length)
}

export const shortFileNameWithExtension = (text: string = 'unknown', length = 24) => {
  const extension = extensionExporter(text)

  if (text.length + extension.length > length) {
    return text.slice(0, length) + '...' + extension
  } else {
    return text
  }
}

export const bytesToKb= (value: number = 1024): string => {
  return Math.floor(value / 1024) + 'KB'
}

// create a random name for this message owner to create a uniq object key.

// export const makeValidNameProperty = async (name) => {
//   const hash = CryptoJS.MD5(name).toString()
//   return await `p_${hash.substr(0, 8)}`
// }