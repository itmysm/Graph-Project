import useAppStore from "@/store/app";
import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import { FiFileText } from "react-icons/fi";

export default function DragAndDropArea() {
  const appStore = useAppStore();
  const [file, setFile] = useState<File | null>(null);
  const [inZone, setInZone] = useState<Boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { fileInfo, updateFileInfo } = useAppStore();

  useEffect(() => {
    if (fileInfo.name == null && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [fileInfo.name]);

  const dragOverHandler = (ev) => {
    setFile(null);
    setInZone(true);
    ev.preventDefault();
  };

  const onMouseLeaveHandler = () => {
    setInZone(false);
  };

  const onHandelOpenBrowser = () => {
    fileInputRef?.current?.click();
  };

  const dropHandler = (ev: React.DragEvent<HTMLInputElement>) => {
    ev.preventDefault();

    if (ev.dataTransfer?.items) {
      [...ev.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          if (file != null) {
            handleUploadFile(file);
          }
        }
      });
    } else if (ev.target instanceof HTMLInputElement && ev.target?.files) {
      // Fallback for non-drag-and-drop file input
      const file = ev.target.files[0];
      handleUploadFile(file);
    }
  };

  const handleUploadFile = (file: File) => {
    if (file.name != fileInfo?.name) {
      setFile(file);
      updateFileInfo({ ...fileInfo, name: file.name });
    }
  };

  return (
    <div
      className="border border-gray/50 border-dashed rounded-lg flex flex-col justify-center items-center py-10 px-32 cursor-pointer relative"
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
      onDragLeave={onMouseLeaveHandler}
      onClick={onHandelOpenBrowser}
    >
      <input
        id="fileUpload"
        ref={fileInputRef}
        onChange={() => dropHandler}
        className="w-full h-full cursor-pointer hidden"
        type="file"
        accept=".htm,.html,.json,.txt"
      />

      {file?.name}

      <FiFileText className="text-5xl text-gray/50" strokeWidth="1" />
      <p className="text-base mt-4 text-center">
        <span className="text-info">Upload documents</span> or drag and drop <br /> <span className="text-gray/50">TXT, JSON up to 10MB</span>
      </p>
    </div>
  );
}
