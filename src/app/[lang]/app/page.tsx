"use client";

import TheLoading from "@/components/TheLoading";
import NoResult from "@/components/app/NoResult";
import UploadBox from "@/components/app/uploader/UploadBox";
import useAppStore from "@/store/app";
import { useState } from "react";

export default function App() {
  const [showLoading, setShowLoading] = useState(false);
  const appStore = useAppStore((state) => state.status.state);
  const [showUploadDialog, setShowUploadDialog] = useState<Boolean>(false);

  const handleUploadDialog = (status: Boolean) => {
    console.log(status ? "open" : "close");

    setShowUploadDialog(status);
  };

  return (
    <>
      <UploadBox showDialog={showUploadDialog} onCloseDialog={handleUploadDialog} />
      <NoResult onOpenUploadDialog={handleUploadDialog} />
      <TheLoading onShowLoading={showLoading} />
    </>
  );
}
