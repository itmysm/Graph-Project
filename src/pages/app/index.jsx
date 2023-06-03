import { useDispatch } from 'react-redux';
import { CHECK_EXTENSION, START } from '@/stores/reducers/process';

import typeCheck from "@/utils/gaurd/typeCheck";
import delay from "@/utils/tools/delay";

import Upload from "@/components/App/Upload";
import ThemeSwitcher from "@/components/App/ThemeSwitcher";

export default function App() {
  const dispatch = useDispatch();

  const onHandelStartProccess = () => {
    dispatch({ type: START });
  }

  const onHandelExtensionTypeCheck = (status) => {
    dispatch({ type: CHECK_EXTENSION, payload: { isValidExtension: status } });
  };


  const onProccessFile = async (file) => {
    onHandelStartProccess()

    // Step 2: Check extension
    await delay(3000); // Minimum execution time for this step: 500ms
    const status = typeCheck(file.name);
    onHandelExtensionTypeCheck(status)

    // Step 2: Check file content
    await delay(6000); // Minimum execution time for this step: 1000ms
    //const content = await readFileContent(file);

    // Step 3: Change file format
    await delay(10000); // Minimum execution time for this step: 2000ms
    // const changedFile = await changeFileFormat(file, extension);
  }

  return (
    <main className="w-full bg-secondary min-h-[100vh] relative">
      <Upload handelProccess={onProccessFile} />
      <ThemeSwitcher />
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
