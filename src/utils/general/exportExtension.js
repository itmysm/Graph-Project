// this script export the extension of uploaded file

export const exportExtension = (text) => {
  return text.includes('.') ? text.split('').reverse().join('').split('.')[0].split('').reverse().join('') : ''
}