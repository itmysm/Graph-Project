const defaultExtension = ['htm', 'html', 'json', 'txt']

export default function typeCheck (extension, allowTypes = defaultExtension) {
  let status = false
  allowTypes.map((type) => {
    if (type == extension) {
      status = true
    }
  })
  
  return status
}