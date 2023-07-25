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

export const makeValidNameProperty = (name) => {
  const hash = CryptoJS.MD5(name).toString()
  return `p_${hash.substr(0, 8)}`
}