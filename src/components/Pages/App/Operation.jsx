import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEL_FILE } from "src/stores/reducers/file";
import {
  CHECK_EXTENSION,
  CHECK_STRUCTURE,
  DESTROY_OPERATION,
  START,
} from "src/stores/reducers/process";
import { NEW_ALERT } from "src/stores/reducers/alert";
import { checkStructure } from "src/utils/guard/structureCheck";
import ReadFile from "src/utils/general/readFile";
import delay from "src/utils/tools/delay";
import typeAlerts from "src/utils/types/alerts";
import typeCheck from "src/utils/guard/typeCheck";
import { FileContext } from "./FileContext";
import { whatsapp } from "src/utils/general";
import { DETECT_APP } from "../../../stores/reducers/process";

export default function Operation() {
  const { selectedFile } = useContext(FileContext);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const readFile = new ReadFile();
  let application = null;

  useEffect(() => {
    selectedFile !== null && setFile(selectedFile);
  }, [selectedFile]);

  useEffect(() => {
    file && startProccess(file);
  }, [file]);

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
    const status = await checkStructure(file);
    application = status;

    if (application) {
      dispatch({
        type: CHECK_STRUCTURE,
        payload: { app: application, isValidStructure: !!application },
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

  const onDetectApplication = async (app) => {
    dispatch({ type: DETECT_APP });
    switch (app) {
      case "whatsapp":
        whatsapp(file)
        break;

      default:
        return null;
        break;
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
    await delay(1000);

    onDetectApplication(application);
  };
  return <></>;
}