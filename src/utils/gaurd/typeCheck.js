const defaultExtension = ['htm', 'html', 'json', 'txt']

export default function typeCheck (fileName, allowTypes = defaultExtension) {
  const extension = fileName.split('').reverse().join('').split('.')[0].split('').reverse().join('') // getting extension from full file name
  let status = false
  allowTypes.map((type) => {
    if (type == extension) {
      status = true
    }
  })
  
  return status
}