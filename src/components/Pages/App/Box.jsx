import { useEffect, useState } from "react";
import FileBox from "./Uploader/FileBox";
import StickLoading from "../../UI/Preloading/stick";
import { useSelector } from "react-redux";
import ProgressBar from "./Uploader/ProgressBar";
import ChatList from "../../UI/Chats/Index";

export default function Box() {
  const processLoading = useSelector((state) => state.process.loading);
  const operationStatus = useSelector((state) => state.process.status);
  const [titleOfBox, setTitleOfBox] = useState("Upload File");
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    if (operationStatus === 'done') {
      setTimeout(() => {
        setVisibility(false);
      }, 1000);
    }
  }, [operationStatus]);

  return (
    <div
      className={`w-full h-[100vh] max-h-[100vh] flex flex-col justify-center items-center overflow-hidden absolute top-0 backdrop-blur-[8px] ${
        !visibility ? "hidden" : ""
      }`}
    >
      <div
        className={`w-10/12 sm:w-8/12 md:w-[750px] bg-secondary-active rounded-xl px-4 py-4 md:px-10 md:py-8 relative z-[8] animate__animated ${
          !processLoading && operationStatus === "done"
            ? "animate__fadeOut"
            : ""
        }`}
      >
        <h3 className="text-primary text-xl font-semibold">{titleOfBox}</h3>

        <FileBox />
        {/* <ChatList chatList={file} /> */}
        {processLoading && <StickLoading />}
      </div>

      <ProgressBar />
    </div>
  );
}
