import { useSelector, useDispatch } from 'react-redux';

import { Progress } from "@nextui-org/react";
import { FiFile, FiX } from 'react-icons/fi'
import { DEL_FILE } from '@/stores/reducers/file';


export default function FileProgress(props) {
  const file = useSelector(state => state.file);
  console.log(file);
  const dispatch = useDispatch();

  const handleRemoveFile = () => {
    dispatch({ type: DEL_FILE });
  };

  return file && (
    <div className="w-full flex items-center md:pr-4">
      1
      <FiFile className="text-gray-text relative top-1" size="30" />
      <div className='w-full flex flex-col px-2'>
        <p className="text-sm lowercase mb-1 text-gray-text">{file.name}</p>
        <Progress size="xs" className="bg-gray-text [&>*]:bg-info" value={100} />
      </div>
      <FiX onClick={handleRemoveFile} className="text-gray-text relative top-2 hover:text-info cursor-pointer" size="30" />
    </div>
  );
}