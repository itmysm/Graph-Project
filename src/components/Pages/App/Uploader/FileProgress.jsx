import { useDispatch, useSelector } from "react-redux";

import { Progress } from "@nextui-org/progress";
import { FiFile, FiX } from "react-icons/fi";
import { DEL_FILE } from "src/stores/reducers/file";
import { shortener } from "src/utils/general";

export default function FileProgress(props) {
  const file = useSelector((state) => state.file);
  const dispatch = useDispatch();

  const handleRemoveFile = () => {
    dispatch({ type: DEL_FILE });
  };

  return (
    file.reference != null && (
      <div className="w-full flex items-center md:pr-4">
        <FiFile className="text-gray-text relative top-1" size="30" />
        <div className="w-full flex flex-col px-2">
          <p className="text-sm lowercase mb-1 text-gray-text">
            {shortener(file.reference.name, 20)}
          </p>
          <Progress
            aria-label="Loading..."
            value={100}
            className="bg-gray-text [&>*]:bg-info rounded-xl"
            size="md"
          />
        </div>
        <FiX
          onClick={handleRemoveFile}
          className="text-gray-text relative top-2 hover:text-red cursor-pointer"
          size="30"
        />
      </div>
    )
  );
}
