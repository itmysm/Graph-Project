import { Button } from "@nextui-org/react";
import { useState, useRef, useEffect } from "react";
import { FiUploadCloud } from 'react-icons/fi'
import FileProgress from "./FileProgress";
import { useSelector } from "react-redux";
import StickLoading from "@/components/UI/Preloading/stick";
import InfoBox from "@/components/UI/Alert/InfoBox";



export default function FileBox({ onUploadFile }) {
  const [file, setFile] = useState(null)
  const [inZone, setInZone] = useState(null)
  const fileInputRef = useRef(null);
  const fileStatus = useSelector((state) => state.file.reference)
  const processLoading = useSelector((state) => state.process.loading)

  useEffect(() => {
    if (fileStatus?.reference == null) fileInputRef.current.value = ""
  }, [fileStatus])

  const dropHandler = (ev) => {
    ev.preventDefault();

    if (ev.dataTransfer?.items) {
      [...ev.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          setFile(item.getAsFile())
          onUploadFile(ev.target?.files[0]);
        }
      });
    }

    if (ev.target?.files) {
      setFile(ev.target?.files[0])
      // const chunker = new Chunks(ev.target?.files[0])
      // chunker.process()
      onUploadFile(ev.target?.files[0]);
    }
  }

  const dragOverHandler = (ev) => {
    setFile(null)
    setInZone(true)
    ev.preventDefault();
  }

  const onMouseLeaveHandler = () => {
    setInZone(false);
  }

  const onHandelOpenBrowser = () => {
    !processLoading && fileInputRef.current.click()
  }

  return (
    <>
      <div className="w-10/12 sm:w-8/12 md:w-[750px] bg-secondary-active grid grid-cols-2 rounded-xl px-4 py-4 md:px-10 md:py-8 relative z-[8]">
        <div className={`
          col-span-2 p-4 md:p-0 md:col-span-1 flex flex-col 
          ${processLoading && 'opacity-5'} md:flex 
        `}>
          <h3 className="text-primary text-xl font-semibold">Upload File</h3>
          <div className="w-full my-10 h-60 md:pr-6">
            {!fileStatus && <InfoBox />}
            <FileProgress file={file} />
          </div>



          <div className="flex flex-col items-start">
            <Button disabled={processLoading} className="text-white w-full md:w-1/2 bg-info rounded-xl relative z-[9] py-6 md:p-auto" auto>
              Browse File
              <FiUploadCloud className="ml-4 md:hidden" size="20" />
              <input ref={fileInputRef} onChange={dropHandler} className="absolute opacity-0 cursor-pointer" type="file" accept=".htm,.html,.json,.txt" />
            </Button>
          </div>
        </div>

        <div
          className={`
          hidden md:flex
          col-span-2 md:col-span-1 h-96 flex flex-col justify-center items-center border border-dashed rounded-xl text-gray-text 
          ${inZone ? 'border-info' : 'border-primary/20'} 
          ${fileStatus?.name && 'hidden md:flex'}
          ${processLoading && 'opacity-5'} 
          `}
          onDragOver={dragOverHandler}
          onDrop={dropHandler}
          onDragLeave={onMouseLeaveHandler}
          onClick={onHandelOpenBrowser}>
          <p className="font-semibold text-center">Drag and drop your file here to get start <br /> or <span className="underline">chose from your device</span></p>
          <FiUploadCloud className="mt-4" size="25" />
        </div>

        {processLoading && <StickLoading />}
      </div>
    </>
  )
}