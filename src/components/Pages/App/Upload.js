import { useDispatch } from 'react-redux';
import { NEW_FILE } from '@/stores/reducers/file';

import FileBox from "./FileBox";
import Processor from '../../UI/Processor/Processor';

export default function Upload({ handelProccess }) {
  const dispatch = useDispatch();
  const handleUploadFile = (file) => {
    dispatch({ type: NEW_FILE, payload: { name: file.name, size: file.size, type: file.type } });
    handelProccess(file)
  };

  return (<div className="w-full h-[100vh] flex flex-col justify-center items-center backdrop-blur-md">
    <FileBox onUploadFile={handleUploadFile} />
    <Processor />
  </div>)
}


/*
guard utils job:

step 1 => check extension name 
step 2 => check uploaded file is supported or not
step 3 => break-down the file into small chunks
step 4 => turn data to standard and useful format(json)
*/