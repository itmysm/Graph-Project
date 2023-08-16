import { createContext, useState } from "react"

const FileContext = createContext();

const FileProvider = ({ children }) => {
  const [selectedFile, setSelectedFile] = useState(null)

  return (
    <FileContext.Provider value={{ selectedFile, setSelectedFile }}>
      {children}
    </FileContext.Provider>
  )
}

export { FileContext, FileProvider };