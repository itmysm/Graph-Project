import { Page } from "@/types/locales";
import { ReadFile, detectApplication, convertToStandardStructure } from "@/lib/core/index";
import { extensionExporter } from "@/lib/general/index";
import useAppStore from "@/store/app";
import { Config, Application } from "@/types/core";
import { useEffect } from "react";
import { Analyzer } from "@/lib/core/analyze";

type Props = {
  i18n: Page;
  file: File;
};

export default function Processor({ i18n, file }: Props) {
  const { fileInfo, updateFileInfo, updateStatus, status } = useAppStore();
  const fileReader = new ReadFile();

  const config: Config = {
    isTargetReached: false,
    application: { os: null, app: null },
  };

  const isTargetReached = (): boolean => {
    return config.isTargetReached;
  };

  const onDetectApplication = (line: string) => {
    const application: Application = detectApplication(line, fileInfo?.extension);

    if (application && status.state != 3) {
      config.application = application;
      config.isTargetReached = true;
      updateStatus({ ...status, state: (status.state = 3) });

      onConvertToStandardStructure();
    }
  };

  const onConvertToStandardStructure = async () => {
    if (config.application) {
      await convertToStandardStructure(file, config.application);
      updateStatus({ ...status, state: (status.state = 4) });
      onAnalyzeData();
    }
  };

  const onAnalyzeData = async () => {
    Analyzer();
    updateStatus({ ...status, state: (status.state = 10) });
  };

  useEffect(() => {
    fileReader.lineByLine(file, onDetectApplication, isTargetReached);
  }, []);

  return <div className=""></div>;
}
