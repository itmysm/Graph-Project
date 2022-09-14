// this function split file name from extension & vice versa
export default function (fileName, type = 'extension') {
  return useState('fileNameSplitter', () => {
    if (type === 'extension') {
      return fileName.match(/[^\\.]+$/)[0]
    } else if (type === 'name') {
      return fileName.split(/[^\\.]+$/)[0].replaceAll('.', '')
    }
  })
}
