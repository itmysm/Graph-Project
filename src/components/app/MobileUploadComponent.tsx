import { Page } from "@/types/locales";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useEffect } from "react";

type Props = {
  i18n: Page;
  onOpenUploadDialog: (status: boolean) => void;
};

export default function MobileUploadComponent({ i18n, onOpenUploadDialog }: Props) {
  function handelFileUploader(status: boolean) {
    onOpenUploadDialog(status);
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <p className="text-xl tracking-wide text-contrast/90 font-semibold mt-10 mb-8">{i18n.app.noUploadedFile}</p>

      <div className="w-full flex justify-center items-center">
        <Button className="text-white font-semibold bg-info tracking-wide hover:bg-info/90 hover:text-contrast/80 rounded-lg" onPress={() => handelFileUploader(true)}>
          {i18n.app.upload}
        </Button>
        <p className="text-sm text-contrast mx-5 tracking-wide">{i18n.app.separator}</p>
        <Button className="text-contrast tracking-wide font-semibold bg-secondary hover:bg-secondary/90 rounded-lg">{i18n.app.useTemplate}</Button>
      </div>
    </div>
  );
}
