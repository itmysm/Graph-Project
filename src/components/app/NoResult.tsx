import { Button } from "@nextui-org/react";

type Props = {
  i18n: Object;
  onOpenUploadDialog: (status: boolean) => void;
};

export default function NoResult({ i18n, onOpenUploadDialog }: Props) {
  function handelFileUploader() {
    onOpenUploadDialog(true);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-lg tracking-wide text-contrast/70 font-semibold mt-10 mb-4">{i18n.noUploadedFile}</p>

      <div className="w-full flex justify-center items-center">
        <Button
          className="text-contrast font-semibold bg-info hover:bg-info/90 hover:text-contrast/80 rounded-lg"
          onPress={() => handelFileUploader()}
        >
          {i18n.upload}
        </Button>
        <p className="text-sm text-contrast mx-3 tracking-wide">{i18n.separator}</p>
        <Button className="text-contrast font-semibold bg-secondary hover:bg-secondary/90 rounded-lg">
          {i18n.useTemplate}
        </Button>
      </div>
    </div>
  );
}
