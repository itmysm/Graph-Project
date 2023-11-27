"use client";

import { LocaleLabel } from "$/i18n.config";
import TheLoading from "@/components/TheLoading";
import MobileUploadComponent from "@/components/app/MobileUploadComponent";
import DragAndDropArea from "@/components/app/uploader/DragDropArea";
import Progresser from "@/components/app/uploader/ProgressComponent";
import Processor from "@/components/app/uploader/ProcessorComponent";
import { getClientSideLocales } from "@/lib/locales/clientSideLocales";
import { useEffect, useState } from "react";
import useAppStore from "@/store/app";
import { effectWithDelay } from "@/lib/general";

export default function App({ params }: { params: { lang: LocaleLabel } }) {
  const [file, setFile] = useState<File | null>(null);
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

  const onHandleUploadFile = (incomingFile: File) => {
    setFile(incomingFile);
  };

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const translationModule = await getClientSideLocales(params.lang);
        setTranslations(translationModule);
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
        <div className="flex justify-center md:items-center h-full bg-gradient-main overflow-x-hidden">
          {status.state == 1 && (
            <div className={`w-full md:w-8/12 h-[inherit] flex flex-col md:justify-center ${status.state === 1 ? classes.fadeIn : classes.fadeOut}`}>
              <div className="hidden md:flex flex-col justify-center items-center py-20">
                <div className="flex flex-col items-center mb-4 md:mb-6 lg:mb-10">
                  <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-info w-2/3 text-center !leading-snug">
                    {translations.page.app.uploadAreaTitle}
                  </p>
                  <p className="text-center font-semibold text-info/70 mt-4 tracking-widest">{translations.page.app.features}</p>
                </div>

                <DragAndDropArea
                  i18n={{ ...translations.alerts, ...translations.page }}
                  showUploadDialog={showUploadDialog}
                  setCloseUploadDialog={handleUploadDialog}
                  handleUploadFile={onHandleUploadFile}
                />
              </div>

              <div className="md:hidden w-full h-[inherit]">
                <MobileUploadComponent i18n={translations.page} onOpenUploadDialog={handleUploadDialog} />
              </div>
            </div>
          )}

          {status.state >= 2 && <Progresser i18n={translations.alerts} extraClasses={status.state >= 2 ? classes.fadeIn : classes.fadeOut} />}
          {status.state >= 2 && file != null && <Processor file={file} i18n={translations.alerts} />}
        </div>

        <TheLoading onShowLoading={showLoading} />
      </>
    )
  );
}
