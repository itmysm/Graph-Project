import { useEffect, useState } from "react";
import useAppStore from "@/store/app";
import { FiFileText, FiX } from "react-icons/fi";
import { Progress } from "@nextui-org/react";
import { progress } from "framer-motion";

export default function FileUploadProgress() {
  const { fileInfo, updateFileInfo } = useAppStore();

  const onHandleRemoveFile = (): void => {
    console.log("remove the file");
  };

  return (
    fileInfo.name && (
      <div className="border border-gray/50 p-3 rounded-lg transition-all delay-150">
        <div className="w-full flex relative">
          <FiFileText className="text-4xl text-gray/50" strokeWidth="1" />
          <div className="w-full flex flex-col justify-evenly ml-2">
            <p className="text-sm text-active">{fileInfo.name}</p>
            <Progress aria-label="Downloading..." size="sm" value={100} color="success" className="w-full" />
          </div>

          <span className="absolute right-0 cursor-pointer" onPress={() => onHandleRemoveFile}>
            <FiX />
          </span>
        </div>
      </div>
    )
  );
}
