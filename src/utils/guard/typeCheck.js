// This script checks the format of uploaded files and has the task of not allowing unauthorized formats to continue

import { exportExtension } from "../general"

const defaultExtension = ['htm', 'html', 'json', 'txt']

export default function typeCheck (fileName, allowTypes = defaultExtension) {
  const extension = exportExtension(fileName)
  let status = false
  allowTypes.map((type) => {
    if (type == extension) {
      status = true
    }
  })
  
  return status
}