"use client";

import { LocaleLabel } from "$/i18n.config";
import TheLoading from "@/components/TheLoading";
import NoResult from "@/components/app/NoResult";
import UploadBox from "@/components/app/uploader/UploadBox";
import { getClientSideLocales } from "@/lib/locales/clientSideLocales";
import useAppStore from "@/store/app";
import { Page } from "@/types/locales";
import { useEffect, useState } from "react";

export default function App({ params }: { params: { lang: LocaleLabel } }) {
  const [showLoading, setShowLoading] = useState(false);
  const appStore = useAppStore((state) => state.status.state);
  const [showUploadDialog, setShowUploadDialog] = useState<Boolean>(false);
  const [translations, setTranslations] = useState<any>(null);

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
        <UploadBox i18n={translations} showDialog={showUploadDialog} onCloseDialog={handleUploadDialog} />
        <NoResult i18n={translations} onOpenUploadDialog={handleUploadDialog} />
        <TheLoading onShowLoading={showLoading} />
      </>
    )
  );
}
