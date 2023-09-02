import { useState, useRef, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NEW_FILE } from "@/stores/reducers/file";

import { FiUploadCloud } from "react-icons/fi";
import { Button } from "@nextui-org/button";
import FileProgress from "./FileProgress";
import InfoBox from "../../../UI/Alert/InfoBox";
import { FileContext } from "../FileContext";

export default function FileBox() {
  const dispatch = useDispatch();
  const { setSelectedFile } = useContext(FileContext);
  const [file, setFile] = useState(null);
  const [inZone, setInZone] = useState(null);
  const fileInputRef = useRef(null);
  const fileStatus = useSelector((state) => state.file.reference);
  const processLoading = useSelector((state) => state.process.loading);

  useEffect(() => {
    if (fileStatus?.reference == null) {
      fileInputRef.current.value = "";
      setSelectedFile(null);
    }
  }, [fileStatus, setSelectedFile]);

  const dropHandler = (ev) => {
    ev.preventDefault();

    if (ev.dataTransfer?.items) {
      [...ev.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          setFile(item.getAsFile());
          handleUploadFile(ev.target?.files[0]);
        }
      });
    }

    if (ev.target?.files) {
      setFile(ev.target?.files[0]);
      handleUploadFile(ev.target?.files[0]);
    }
  };

  const dragOverHandler = (ev) => {
    setFile(null);
    setInZone(true);
    ev.preventDefault();
  };

  const onMouseLeaveHandler = () => {
    setInZone(false);
  };

  const onHandelOpenBrowser = () => {
    !processLoading && fileInputRef.current.click();
  };

  const handleUploadFile = (file) => {
    if (file.name != fileStatus?.name) {
      dispatch({
        type: NEW_FILE,
        payload: { name: file.name, size: file.size, type: file.type },
      });
      setSelectedFile(file);
    }
  };

  return (
    <div className="grid grid-cols-2">
      <div
        className={`
          col-span-2 p-4 md:p-0 md:col-span-1 flex flex-col 
          ${processLoading && "opacity-5"} md:flex 
        `}
      >
        <div className="w-full my-10 h-60 md:pr-6">
          {!fileStatus && <InfoBox />}
          <FileProgress file={file} />
        </div>

        <div className="flex flex-col items-start">
          <Button
            color="primary"
            disabled={processLoading}
            className="text-white w-full md:w-1/2 rounded-xl relative z-[9] py-6 md:p-auto"
            auto
          >
            Browse File
            <FiUploadCloud className="ml-4 md:hidden" size="20" />
            <input
              id="fileUpload"
              ref={fileInputRef}
              onChange={dropHandler}
              className="absolute opacity-0 cursor-pointer"
              type="file"
              accept=".htm,.html,.json,.txt"
            />
          </Button>
        </div>
      </div>

      <div
        className={`
          hidden md:flex
          col-span-2 md:col-span-1 h-96 flex flex-col justify-center items-center border border-dashed rounded-xl text-gray-text 
          ${inZone ? "border-info" : "border-primary/20"} 
          ${fileStatus?.name && "hidden md:flex"}
          ${processLoading && "opacity-5"} 
          `}
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
        onDragLeave={onMouseLeaveHandler}
        onClick={onHandelOpenBrowser}
      >
        <p className="font-semibold text-center">
          Drag and drop your file here to get start <br /> or{" "}
          <span className="underline">chose from your device</span>
        </p>
        <FiUploadCloud className="mt-4" size="25" />
      </div>
    </div>
  );
}
