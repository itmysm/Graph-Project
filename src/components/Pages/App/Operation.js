import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEL_FILE } from "@/stores/reducers/file";
import { CHECK_EXTENSION, CHECK_STRUCTURE, DESTROY_OPERATION, START } from "@/stores/reducers/process";
import { NEW_ALERT } from "@/stores/reducers/alert";
import { checkStructure } from "@/utils/guard/structureCheck";
import ReadFile from "@/utils/general/readFile";
import delay from "@/utils/tools/delay";
import typeAlerts from "@/utils/types/alerts";
import typeCheck from "@/utils/guard/typeCheck";
import { FileContext } from "./FileContext";

export default function Operation() {
  const { selectedFile } = useContext(FileContext)
  let application = null

  useEffect(() => {
    startProccess(selectedFile)
  }, [])

  const dispatch = useDispatch();
  const readFile = new ReadFile();

  const onHandelStartProccess = () => {
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
    const status = await checkStructure(file)
    application = status

    if (!!status) {
      dispatch({
        type: CHECK_STRUCTURE,
        payload: { app: status, isValidStructure: !!status },
      });
    } else {
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

  const onRemoveFile = () => {
    dispatch({ type: DEL_FILE });
  };

  const startProccess = async (file) => {
    onHandelStartProccess();
    await delay(1000);

    const status = typeCheck(file.name);
    onHandelExtensionTypeCheck(status);
    await delay(1000);

    onCheckStructure(file);
    await delay(1000)
  }
  return (<></>)
}