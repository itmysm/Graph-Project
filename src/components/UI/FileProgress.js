import { Progress } from "@nextui-org/react";
import { FiFile, FiX } from 'react-icons/fi'

export default function FileProgress(props) {

  return (
    props.file && <div className="w-full flex items-center md:pr-4">
      <FiFile className="text-gray-text relative top-1" size="30" />
      <div className='w-full flex flex-col px-2'>
        <p className="text-sm lowercase mb-1 text-gray-text">{props.file.name}</p>
        <Progress size="xs" className="bg-gray-text [&>*]:bg-info" value={100} />
      </div>

      <FiX className="text-gray-text relative top-2 hover:text-info cursor-pointer" size="30" />
    </div>
  )
}