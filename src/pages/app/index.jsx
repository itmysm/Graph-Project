import { useDispatch } from "react-redux";
import {
  CHECK_EXTENSION,
  CHECK_STRUCTURE,
  DESTROY_OPERATION,
  START,
} from "@/stores/reducers/process";

import typeCheck from "@/utils/guard/typeCheck";
import delay from "@/utils/tools/delay";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useState } from "react";
import AlertProvider from "@/components/UI/Alert/AlertProvider";
import { NEW_ALERT } from "@/stores/reducers/alert";
import ReadFile from "@/utils/general/readFile";
import { checkStructure } from "@/utils/guard/structureCheck";
import { DEL_FILE } from "@/stores/reducers/file";
import typeAlerts from "@/utils/types/alerts";
import Box from "@/components/Pages/App/Box";

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

  const onStartProccess = async (file) => {
    onHandelStartProccess(file);
    await delay(1000);

    const status = typeCheck(file.name);
    onHandelExtensionTypeCheck(status);
    await delay(1000);

    onCheckStructure(file);
    await delay(1000);
  };

  const onRemoveFile = () => {
    dispatch({ type: DEL_FILE });
  };

  return (
    <main className="w-full bg-secondary min-h-[100vh] relative">
      <Box startProccess={onStartProccess} />

      <ThemeSwitcher />
      <AlertProvider />
    </main>
  );
}
