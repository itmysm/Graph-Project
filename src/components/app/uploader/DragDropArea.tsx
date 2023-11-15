import extensionsValidator from "@/lib/guard/extensionsValidator";
import useAppStore from "@/store/app";
import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import { FiFileText } from "react-icons/fi";

export default function DragAndDropArea() {
  const [file, setFile] = useState<File | null>(null);
  const [inZone, setInZone] = useState<Boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { fileInfo, updateFileInfo } = useAppStore();

  useEffect(() => {
    if (fileInfo.name == null && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [fileInfo.name]);

  const dragOverHandler = (ev: React.DragEvent<HTMLInputElement>) => {
    setInZone(true);
    ev.preventDefault();
  };

  const onMouseLeaveHandler = () => {
    setInZone(false);
  };

  const onOpenFileBrowser = () => {
    fileInputRef?.current?.click();
  };

  const dropHandler = (ev: React.DragEvent<HTMLInputElement>) => {
    ev.preventDefault();

    if (ev.dataTransfer?.items) {
      [...ev.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const comingFile = item.getAsFile();
          if (comingFile != null) {
            saveUploadedFile(comingFile);
          }
        }
      });
    }
  };

  const onBrowseFileHandle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    if (ev.target instanceof HTMLInputElement && ev.target?.files) {
      const comingFile = ev.target.files[0];
      saveUploadedFile(comingFile);
    }
  };

  const saveUploadedFile = (newFile: File) => {
    if (!guard_onCheckFileExtension(newFile.name)) {
      window.alert('error on file')
      return;
    }

    if (newFile.name != fileInfo?.name) {
      setFile(newFile);
      updateFileInfo({
        ...fileInfo,
        name: newFile.name,
        date: newFile.lastModified,
        size: newFile.size,
        type: newFile.type,
        uploadDate: new Date().getTime(),
      });
    }
  };

  const guard_onCheckFileExtension = (fileName: string): Boolean => {
    return extensionsValidator(fileName);
  };

  return (
    <div
      className={`border border-dashed rounded-lg flex flex-col justify-center items-center py-10 px-10 lg:px-32 cursor-pointer relative transition-all ${
        inZone ? "border-gray/70" : "border-gray/40"
      }`}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
      onDragLeave={onMouseLeaveHandler}
      onClick={onOpenFileBrowser}
    >
      <input
        id="fileUpload"
        ref={fileInputRef}
        onChange={(event) => onBrowseFileHandle(event)}
        className="w-full h-full cursor-pointer hidden"
        type="file"
        accept=".htm,.html,.json,.txt"
      />

      <FiFileText className="text-5xl text-gray/50" strokeWidth="1" />
      <p className="text-base mt-4 text-center">
        <span className="text-info">Upload document</span> or drag and drop <br />{" "}
        <span className="text-gray/50">TXT, JSON up to 10MB</span>
      </p>
    </div>
  );
}
