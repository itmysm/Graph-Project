"use client";

import { LocaleLabel } from "$/i18n.config";
import TheLoading from "@/components/TheLoading";
import MobileUploadComponent from "@/components/app/MobileUploadComponent";
import DragAndDropArea from "@/components/app/uploader/DragDropArea";
import Progresser from "@/components/app/uploader/ProgressComponent";
import { getClientSideLocales } from "@/lib/locales/clientSideLocales";
import { useEffect, useState } from "react";
import useAppStore from "@/store/app";
import { effectWithDelay } from "@/lib/general";

export default function App({ params }: { params: { lang: LocaleLabel } }) {
  const [showLoading, setShowLoading] = useState(false);
  const [showUploadDialog, setShowUploadDialog] = useState<Boolean>(false);
  const [translations, setTranslations] = useState<any>(null);
  const { status, updateStatus } = useAppStore();

  const classes = {
    fadeOut: "animate__animated  animate__fadeOutRight",
    fadeIn: "animate__animated  animate__fadeInLeft",
  };

  const handleUploadDialog = (status: Boolean) => {
    setShowUploadDialog(status);
  };

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const translationModule = await getClientSideLocales(params.lang);
        setTranslations(translationModule.page);
      } catch (error) {
        window.alert("Error loading translations");
        console.log("Error loading translations:", error);
      }
    };

    fetchTranslations();
  }, [params.lang]);

  return (
    translations && (
      <>
        <div className="flex justify-center items-center h-full bg-gradient-main overflow-x-hidden">
          {status.state == 1 && (
            <div className={`w-full md:w-8/12 flex flex-col justify-center ${status.state === 1 ? classes.fadeIn : classes.fadeOut}`}>
              <div className="hidden md:flex flex-col justify-center items-center py-20">
                <div className="mb-4 md:mb-6 lg:mb-10">
                  <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-info">Upload Your chat and wait for results.</p>
                  <p className="text-center font-semibold text-info/70 mt-4 tracking-widest">Simple, Secure, Offline</p>
                </div>

                <DragAndDropArea i18n={translations} showUploadDialog={showUploadDialog} setCloseUploadDialog={handleUploadDialog} />
              </div>

              <div className="md:hidden w-full flex justify-center items-center h-full">
                <MobileUploadComponent i18n={translations} onOpenUploadDialog={handleUploadDialog} />
              </div>
            </div>
          )}

          {status.state == 2 && <Progresser extraClasses={status.state === 2 ? classes.fadeIn : classes.fadeOut} />}
        </div>

        <TheLoading onShowLoading={showLoading} />
      </>
    )
  );
}
