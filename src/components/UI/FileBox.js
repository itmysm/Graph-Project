import { Button } from "@nextui-org/react";
import { useState, useRef, useEffect } from "react";
import { FiUploadCloud } from 'react-icons/fi'
import FileProgress from "./FileProgress";
import { useSelector } from "react-redux";

export default function FileBox({ onUploadFile }) {
  const [file, setFile] = useState(null)
  const [inZone, setInZone] = useState(null)
  const fileInputRef = useRef(null);
  const fileStatus = useSelector((state) => state.file.reference)

  useEffect(() => {
    if(fileStatus?.reference == null) fileInputRef.current.value = ""
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
    fileInputRef.current.click()
  }

  return (
    <>
      {
        <div className="w-10/12 sm:w-8/12 md:w-[750px] bg-secondary-active grid grid-cols-2 py-8 rounded-xl px-10">
          <div className={`col-span-2 md:col-span-1 flex flex-col ${fileStatus == null && 'hidden'} md:flex`}>
            <h3 className="text-primary text-xl font-semibold">Upload File</h3>
            <div className="w-full my-10 h-60">
              <FileProgress file={file} />
            </div>


            <div className="flex flex-col items-start">
              <Button className="text-primary w-1/2 hidden md:flex bg-info rounded-xl" auto>
                Browse File
                <input ref={fileInputRef} onChange={dropHandler} className="absolute opacity-0 cursor-pointer" type="file" />
              </Button>
            </div>
          </div>

          <div
            className={`col-span-2 md:col-span-1 h-96 flex flex-col justify-center items-center border border-dashed rounded-xl text-gray-text ${inZone ? 'border-info' : 'border-primary/20'} ${fileStatus?.name && 'hidden'} md:flex`}
            onDragOver={dragOverHandler}
            onDrop={dropHandler}
            onDragLeave={onMouseLeaveHandler}
            onClick={onHandelOpenBrowser}>
            <p className="font-semibold text-center">Drag and drop your file here to get start <br /> or <span className="underline">chose from your device</span></p>
            <FiUploadCloud className="mt-4" size="25" />
          </div>
        </div>
      }
    </>
  )
}