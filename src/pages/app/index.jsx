import { useDispatch } from "react-redux";
import {
  CHECK_EXTENSION,
  CHECK_STRUCTURE,
  DESTROY_OPERATION,
  START,
} from "@/stores/reducers/process";

import typeCheck from "@/utils/guard/typeCheck";
import delay from "@/utils/tools/delay";

import Upload from "@/components/App/Upload";
import ThemeSwitcher from "@/components/App/ThemeSwitcher";
import { useState } from "react";
import AlertProvider from "@/components/UI/Alert/AlertProvider";
import { NEW_ALERT } from "@/stores/reducers/alert";
import typeAlerts from "@/utils/typeAlerts";
import ReadFile from "@/utils/general/readFile";
import { checkStructure } from "@/utils/guard/structureCheck";
import { DEL_FILE } from "@/stores/reducers/file";

export default function App() {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const readFile = new ReadFile();

  const onHandelStartProccess = (file) => {
    dispatch({ type: START });
  };

  const onHandelExtensionTypeCheck = (status) => {
    dispatch({ type: CHECK_EXTENSION, payload: { isValidExtension: status } });

    if (status) {
      dispatch({
        type: CHECK_EXTENSION,
        payload: { isValidExtension: status },
      });
    } else {
      dispatch({ type: DESTROY_OPERATION });

      dispatch({
        type: NEW_ALERT,
        payload: {
          type: "error",
          title: typeAlerts.fileSupport,
        },
      });

      onRemoveFile();
    } // destroy operation because we don't support this type of file
  };

  const onCheckStructure = async (file) => {
    const typeOfData = await checkStructure(file);

    if (!!typeOfData) {
      dispatch({
        type: CHECK_STRUCTURE,
        payload: { app: typeOfData, isValidStructure: !!typeOfData },
      });
    } else {
      console.log(typeOfData);
      dispatch({ type: DESTROY_OPERATION });
      dispatch({
        type: NEW_ALERT,
        payload: {
          type: "error",
          title: typeAlerts.fileStructure,
        },
      });

      onRemoveFile();
    }
  };

  const onProccessFile = async (file) => {
    onHandelStartProccess(file);
    await delay(3000);

    const status = typeCheck(file.name);
    onHandelExtensionTypeCheck(status);
    await delay(6000);

    onCheckStructure(file);
    await delay(2000);
  };

  const onRemoveFile = () => {
    dispatch({ type: DEL_FILE });

    dispatch({
      type: NEW_ALERT,
      payload: {
        type: "info",
        title: typeAlerts.fileRemoved,
      },
    });
  };

  return (
    <main className="w-full bg-secondary min-h-[100vh] relative">
      <Upload handelProccess={onProccessFile} />
      <ThemeSwitcher />
      <AlertProvider />
    </main>
  );
}
