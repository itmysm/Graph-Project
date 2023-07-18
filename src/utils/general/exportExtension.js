export const exportExtension = (text) => {
  return text.split('').reverse().join('').split('.')[0].split('').reverse().join('')
}