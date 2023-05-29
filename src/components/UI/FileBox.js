import { Button } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import { FiUploadCloud } from 'react-icons/fi'
import FileProgress from "./FileProgress";
export default function FileBox() {
  const [file, setFile] = useState(null)
  const [inZone, setInZone] = useState(null)
  const fileInputRef = useRef(null);

  useEffect(() => {
    console.log(file);
  }, [file]);

  const dropHandler = (ev) => {
    ev.preventDefault();

    if (ev.dataTransfer?.items) {
      [...ev.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          setFile(item.getAsFile())
        }
      });
    }

    if (ev.target?.files) {
      setFile(ev.target?.files[0])
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
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <h3 className="text-xl font-semibold">Upload File</h3>
            <div className="w-full my-10 h-60">
              <FileProgress file={file} />
            </div>


            <div className="flex flex-col items-start">
              <Button className="w-1/2 hidden md:flex bg-info rounded-xl" auto>
                Browse File
                <input ref={fileInputRef} onChange={dropHandler} className="absolute opacity-0 cursor-pointer" type="file" />
              </Button>
            </div>
          </div>

          <div
            className={`hidden md:flex col-span-2 md:col-span-1 h-96 flex flex-col justify-center items-center border border-dashed rounded-xl text-gray-text ${inZone ? 'border-info' : 'border-primary/20'}`}
            onDragOver={dragOverHandler}
            onDrop={dropHandler}
            onDragLeave={onMouseLeaveHandler}>
            <p className="font-semibold text-center">Drag and drop your file here to get start <br /> or <span className="underline" onClick={onHandelOpenBrowser}>chose from your computer</span></p>
            <FiUploadCloud className="mt-4" size="25" />
          </div>
        </div>
      }
    </>
  )
}