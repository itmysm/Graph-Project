import { useDispatch } from 'react-redux';
import { NEW_FILE } from '@/stores/reducers/file';

import FileBox from "../UI/FileBox";

export default function Upload() {
  const dispatch = useDispatch();
  const handleUploadFile = (file) => {
    dispatch({ type: NEW_FILE, payload: { name: file.name, size: file.size, type: file.type } });
  };

  return (<div className="w-full h-[100vh] flex flex-col justify-center items-center backdrop-blur-md">
    <FileBox onUploadFile={handleUploadFile} />
  </div>)
}