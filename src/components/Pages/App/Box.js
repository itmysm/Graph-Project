import { useEffect, useState } from "react";
import FileBox from "./Upload/FileBox";
import StickLoading from "@/components/UI/Preloading/stick";
import Processor from "@/components/UI/Processor/Processor";
import { useSelector } from "react-redux";
import ChatList from "@/components/UI/Chats/Index";

export default function Box() {
  const processLoading = useSelector((state) => state.process.loading)
  const [titleOfBox, setTitleOfBox] = useState('Upload File')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    onHandelLoading(processLoading)
  }, [processLoading])
  const onHandelLoading = (status) => {
    setLoading(status)
  }

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center backdrop-blur-md">

      <div className="w-10/12 sm:w-8/12 md:w-[750px] bg-secondary-active rounded-xl px-4 py-4 md:px-10 md:py-8 relative z-[8]">
        <h3 className="text-primary text-xl font-semibold">{titleOfBox}</h3>

        <FileBox />
        {/* <ChatList chatList={file} /> */}
        {loading && <StickLoading />}
      </div>

      <Processor />
    </div>
  )
}