import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEL_FILE } from "@/stores/reducers/file";

import {
  CHECK_EXTENSION,
  CHECK_STRUCTURE,
  DESTROY_OPERATION,
  PREPARATION_RESULT,
  START,
} from "@/stores/reducers/process";
import { NEW_ALERT } from "@/stores/reducers/alert";
import { checkStructure } from "@/utils/guard/structureCheck";
import ReadFile from "@/utils/core/readFile";
import delay from "@/utils/tools/delay";
import defaultAlertMessages from "@/utils/constants/defaultAlertMessages";
import typeCheck from "@/utils/guard/typeCheck";
import { FileContext } from "@/components/Pages/App/FileContext";
import { whatsapp } from "@/utils/general";
import {
  ANALYZE_DATA,
  DETECT_APP,
  END_OPERATION,
} from "@/stores/reducers/process";

import { get, set } from 'idb-keyval';

export default function StateHandler() {
  const { selectedFile } = useContext(FileContext);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  let application = null;
  let result = null;

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
          title: defaultAlertMessages.fileSupport,
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
          title: defaultAlertMessages.fileStructure,
        },
      });
      onRemoveFile();
    }
  };

  const onDetectApplication = async (app) => {
    dispatch({ type: DETECT_APP });
    switch (app) {
      case "whatsapp":
        whatsapp(file);
        break;

      default:
        return null;
        break;
    }
  };

  const onRemoveFile = () => {
    dispatch({ type: DEL_FILE });
  };

  const onHandelWhatsappAnalyzer = async (file) => {
    dispatch({ type: ANALYZE_DATA });
    result = await whatsapp(file);

    await delay(1000);

    dispatch({ type: PREPARATION_RESULT });
    onSaveResultInDB();
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
    await delay(1000);

    // Call different methods base the application name
    switch (application) {
      case "whatsapp":
        onHandelWhatsappAnalyzer(file);
        break;

      default:
        console.log("show alert");
        break;
    }
  };

  async function onSaveResultInDB() {
    await set('result', result)

    dispatch({
      type: NEW_ALERT,
      payload: {
        type: "success",
        title: defaultAlertMessages.resultsReady,
      },
    });

    showResult()
  }

  async function showResult() {
    await delay(2000);
    dispatch({ type: END_OPERATION });
  }

  return <></>;
}
