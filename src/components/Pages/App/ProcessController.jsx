import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEL_FILE } from "@/stores/reducers/file";

import {
  CHECK_EXTENSION,
  CHECK_STRUCTURE,
  DESTROY_OPERATION,
  PREPARATION_RESULT,
  START,
} from "@/stores/reducers/process.ts";
import { NEW_ALERT } from "@/stores/reducers/alert";
import { checkStructure } from "@/utils/guard/structureCheck.ts";
import delay from "@/utils/tools/delay";
import { defaultAlertMessages } from "@/utils/constants";
import typeCheck from "@/utils/guard/typeCheck";
import { FileContext } from "@/components/Pages/App/FileContext";
import { whatsapp } from "@/utils/core/standardization";
import {
  ANALYZE_DATA,
  DETECT_APP,
  END_OPERATION,
} from "@/stores/reducers/process.ts";

import { set } from "idb-keyval";

export default function ProcessController() {
  const { selectedFile } = useContext(FileContext);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  let applicationType = null;
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
    applicationType = await checkStructure(file);

    if (applicationType.app) {
      dispatch({
        type: CHECK_STRUCTURE,
        payload: {
          app: applicationType.app,
          os: applicationType.os || "android",
          isValidStructure: !!applicationType.app,
        },
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

  const onDetectApplication = async () => {
    dispatch({ type: DETECT_APP });
  };

  const onRemoveFile = () => {
    dispatch({ type: DEL_FILE });
  };

  const onHandelWhatsappAnalyzer = async (file) => {
    dispatch({ type: ANALYZE_DATA });
    result = whatsapp(file, applicationType.os);

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

    await onCheckStructure(file);
    await delay(1000);

    onDetectApplication(applicationType);
    await delay(1000);

    // Call different methods base the application name
    switch (applicationType.app) {
      case "whatsapp":
        onHandelWhatsappAnalyzer(file);
        break;

      default:
        console.log("show alert");
        break;
    }
  };

  async function onSaveResultInDB() {
    await set("result", result);

    dispatch({
      type: NEW_ALERT,
      payload: {
        type: "success",
        title: defaultAlertMessages.resultsReady,
      },
    });

    showResult();
  }

  async function showResult() {
    await delay(2000);
    dispatch({ type: END_OPERATION });
  }

  return <></>;
}
