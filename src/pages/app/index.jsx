import { useDispatch } from "react-redux";
import {
  CHECK_EXTENSION,
  DESTROY_OPERATION,
  START,
} from "@/stores/reducers/process";

import typeCheck from "@/utils/gaurd/typeCheck";
import delay from "@/utils/tools/delay";

import Upload from "@/components/App/Upload";
import ThemeSwitcher from "@/components/App/ThemeSwitcher";
import Processor from "@/components/UI/Processor/Processor";
import { useState } from "react";
import Alert from "@/components/UI/Alert/Alert";
import AlertProvider from "@/components/UI/Alert/AlertProvider";
import { NEW_ALERT } from "@/stores/reducers/alert";
import typeAlerts from "@/utils/typeAlerts";

export default function App() {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const onHandelStartProccess = (file) => {
    dispatch({ type: START });
  };

  const onHandelExtensionTypeCheck = (status) => {
    dispatch({ type: CHECK_EXTENSION, payload: { isValidExtension: status } });

    console.log(status);
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
    } // destroy operation because we don't support this type of file
  };

  const onProccessFile = async (file) => {
    // Step 1: Start proccess
    onHandelStartProccess(file);

    // Step 2: Check extension
    await delay(3000); // Minimum execution time for this step: 500ms
    const status = typeCheck(file.name);
    onHandelExtensionTypeCheck(status);

    // Step 3: Check file content
    await delay(6000); // Minimum execution time for this step: 1000ms
    //const content = await readFileContent(file);

    // Step 3: Change file format
    await delay(10000); // Minimum execution time for this step: 2000ms
    // const changedFile = await changeFileFormat(file, extension);
  };

  return (
    <main className="w-full bg-secondary min-h-[100vh] relative">
      <Upload handelProccess={onProccessFile} />
      <ThemeSwitcher />
      <AlertProvider />
    </main>
  );
}

// processFile(file)
//   .then(result => {
//     console.log("Processing completed:", result);
//     // Handle the result
//   })
//   .catch(error => {
//     console.error("An error occurred during processing:", error);
//     // Handle the error
//   });
