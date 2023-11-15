import { Button } from "@nextui-org/react";

type Props = {
  onOpenUploadDialog: (status: boolean) => void;
};

export default function NoResult({ onOpenUploadDialog }: Props) {
  function handelFileUploader() {
    onOpenUploadDialog(true);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-lg tracking-wide text-contrast/70 font-semibold mt-10 mb-4">umm! You still does not any chat for analyzing</p>

      <div className="w-full flex justify-center items-center">
        <Button className="text-contrast font-semibold bg-info hover:bg-info/90 hover:text-contrast/80 rounded-lg" onPress={() => handelFileUploader()}>
          Upload File
        </Button>
        <p className="text-sm text-contrast mx-3 tracking-wide">OR</p>
        <Button className="text-contrast font-semibold bg-secondary hover:bg-secondary/90 rounded-lg">Use Templates</Button>
      </div>
    </div>
  );
}
