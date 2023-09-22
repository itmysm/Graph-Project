// This script is responsible for shortening long names 

import { exportExtension } from "./exportExtension"
import CryptoJS from "crypto-js"


export const shortText = (text, length = 10) => {
  return text.slice(0, length)
}

export const shortener = (text, length = 24) => {
  const extension = exportExtension(text)

  if (text.length + extension.length > length) {
    return text.slice(0, length) + '...' + extension
  } else {
    return text
  }
}

// create a random name for this message owner to create a uniq object key.
export const makeValidNameProperty = async (name) => {
  const hash = CryptoJS.MD5(name).toString()
  return await `p_${hash.substr(0, 8)}`
}