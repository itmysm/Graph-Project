import { Page } from "@/types/locales";
import {
  ReadFile,
  detectApplication,
  convertToStandardStructure,
} from "@/lib/core/index";
import useAppStore from "@/store/app";
import { Config, Application } from "@/types/core";
import { useEffect } from "react";
import { Analyzer } from "@/lib/core/analyze";
import { devLogger } from "@/lib/dev";
import useResultStore from "@/store/result";
import { get } from "idb-keyval";

type Props = {
  i18n: Page;
  file: File;
};

export default function Processor({ i18n, file }: Props) {
  const { updateResults } = useResultStore();
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
    const application: Application | null = detectApplication(
      line,
      fileInfo.extension
    );
    if (application == null) {
      exitProcess("application not detected");
      return;
    } else if (status.state != 3) {
      config.application = application;
      config.isTargetReached = true;
      updateStatus({ ...status, state: (status.state = 3) });
      updateFileInfo({
        ...fileInfo,
        application: config.application.app,
      });

      onConvertToStandardStructure();
    }
  };

  const onConvertToStandardStructure = async () => {
    await convertToStandardStructure(file, config.application);
    updateStatus({ ...status, state: (status.state = 4) });
    onAnalyzeData();
  };

  const onAnalyzeData = async () => {
    Analyzer();
    const updatedResult = await get("results");
    updatedResult && updateResults(updatedResult);
    console.log(updatedResult);
    updateStatus({ ...status, state: (status.state = 10) });
  };

  const exitProcess = (error: string) => {
    window.alert(error);
    devLogger(error, "error");
  };

  useEffect(() => {
    if (fileInfo) {
      fileReader.lineByLine(file, onDetectApplication, isTargetReached);
    } else {
      exitProcess("fileInfo it's not contains any value");
    }
  }, []);

  return <div className=""></div>;
}
