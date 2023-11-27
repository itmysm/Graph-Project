import { Page } from "@/types/locales";
import { ReadFile, detectApplication, convertToStandardStructure } from "@/lib/core/index";
import { extensionExporter } from "@/lib/general/index";
import useAppStore from "@/store/app";
import { Config } from "@/types/core";
import { useEffect } from "react";

type Props = {
  i18n: Page;
  file: File;
};

export default function Processor({ i18n, file }: Props) {
  const { fileInfo, updateFileInfo, updateStatus, status } = useAppStore();
  const fileReader = new ReadFile();

  const config: Config = {
    isTargetReached: false,
    application: null,
  };

  const isTargetReached = (): boolean => {
    return config.isTargetReached;
  };

  const onDetectApplication = (line: string) => {
    const application = detectApplication(line, fileInfo?.extension);

    if (application && status.state != 3) {
      config.application = application;
      config.isTargetReached = true;
      updateStatus({ ...status, state: (status.state = 3) });

      onConvertToStandardStructure();
    }
  };

  const onConvertToStandardStructure = () => {
    if (config.application) {
      convertToStandardStructure(file, config.application);
    }
  };

  useEffect(() => {
    fileReader.lineByLine(file, onDetectApplication, isTargetReached);
  }, []);

  return <div className=""></div>;
}
