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
    <div className="flex flex-col justify-center px-5 h-[inherit]">
      <p className="text-3xl text-center font-semibold leading-10 tracking-wider text-contrast/90 font-semibold">Excellence redefined</p>
      <p className="text-lg text-center text-contrast/60 my-6">Our main objective is to collaborate with digital products dedicated to creating a distinct visual identity that sets them apart from competitors

</p>

      <div className="w-full flex gap-x-3 justify-center items-center">
        <Button className="text-white font-semibold bg-info tracking-wide hover:bg-info/90 hover:text-contrast/80 rounded-full" size="lg" onPress={() => handelFileUploader(true)}>
          {i18n.app.upload}
        </Button>
        <p className="text-sm text-contrast tracking-wide">{i18n.app.separator}</p>
        <Button className="text-contrast tracking-wide font-semibold bg-secondary hover:bg-secondary/90 rounded-full" size="lg">{i18n.app.useTemplate}</Button>
      </div>
    </div>
  );
}
