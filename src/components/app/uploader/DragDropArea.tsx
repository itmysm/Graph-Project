import { extensionExporter } from "@/lib/general";
import extensionsValidator from "@/lib/guard/extensionsValidator";
import useAppStore from "@/store/app";
import useNotificationsStore from "@/store/notification";
import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import { Page, Alert } from "../../../types/locales/index";

type Props = {
  i18n: Page & Alert;
  showUploadDialog: Boolean;
  setCloseUploadDialog: (status: boolean) => void;
  handleUploadFile: (file: File) => void;
};

export default function DragAndDropArea({ i18n, showUploadDialog, handleUploadFile, setCloseUploadDialog }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [inZone, setInZone] = useState<Boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { fileInfo, status, updateFileInfo, updateStatus } = useAppStore();
  const { addNewAlert } = useNotificationsStore();

  useEffect(() => {
    if (fileInfo && fileInfo.name == null && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [fileInfo, fileInfo?.name]);

  useEffect(() => {
    showUploadDialog ? onOpenFileBrowser() : null;
    setTimeout(() => {
      setCloseUploadDialog(false);
    }, 500);
  }, [showUploadDialog]);

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
    updateFileInfo(null);
    if (!guard_onCheckFileExtension(newFile.name)) {
      addNewAlert({
        type: "error",
        title: `${i18n.notAllowedFile} .${extensionExporter(newFile.name)} ${i18n.notAllowedFilePart2}`,
        content: ``,
        id: new Date().getTime(),
      });
      return;
    }

    if (newFile.name != fileInfo?.name) {
      setFile(newFile);
      updateFileInfo({
        ...fileInfo,
        name: newFile.name,
        date: newFile.lastModified,
        size: newFile.size,
        extension: extensionExporter(newFile.name),
        type: newFile.type,
        uploadDate: new Date().getTime(),
      });

      addNewAlert({
        type: "success",
        title: `${i18n.newFile}`,
        content: ``,
        id: new Date().getTime(),
      });

      updateStatus({ ...status, state: 2, isFileUploaded: true });
      handleUploadFile(newFile);
    }
  };

  const guard_onCheckFileExtension = (fileName: string): Boolean => {
    return extensionsValidator(fileName);
  };

  return (
    <div className="bg-border w-full lg:max-w-[800px] p-8 mt-16">
      <div
        className={`rounded-lg flex flex-col bg-gradient-upload-box justify-center items-center py-20 px-4 md:px-10 lg:px-32 cursor-pointer relative transition-all       }`}
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
        onDragLeave={onMouseLeaveHandler}
        onClick={onOpenFileBrowser}
      >
        <div className="p-2 lg:p-3 bg-white box-shadow rounded-full">
          <FiArrowUpCircle className="text-black text-2xl " strokeWidth="2" />
        </div>

        <input
          id="fileUpload"
          ref={fileInputRef}
          onChange={(event) => onBrowseFileHandle(event)}
          className="w-full h-full cursor-pointer hidden"
          type="file"
          accept=".htm,.html,.json,.txt"
        />

        <p className="text-lg lg:text-xl text-white font-bold mt-3 lg:mt-6 text-center tracking-widest">
          {/* <span className="text-info">{i18n.app.uploadDoc}</span> {i18n.app.uploadDragAndDrop} <br /> <span className="text-gray/50">{i18n.app.uploadRules}</span> */}
          {i18n.app.dragBoxTitle}
        </p>

        <p className="text-xs lg:text-sm text-white lg:font-semibold mt-2 tracking-wider">{i18n.app.uploadRules}</p>
      </div>
    </div>
  );
}
