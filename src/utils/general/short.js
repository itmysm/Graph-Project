import { exportExtension } from "./exportExtension"

export const shortText = (text, length = 10) => {
  return text.slice(0, length)
}

export const abbreviateText = (text, length = 24) => {
  const extension = exportExtension(text)

  if (text.length + extension.length > length) {
    return text.slice(0, length) + '...' + extension
  } else {
    return text
  }
}