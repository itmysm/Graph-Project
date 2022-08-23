export default function (dataDecoded) {
  return useState('localStorageDecode', () => JSON.parse(localStorage.getItem(dataDecoded)))
}
